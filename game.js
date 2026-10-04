  roll(val1, val2, onComplete) {
    this.resize();

    // 1. 画面に描画される前に上空（見えない位置）へ即座に退避
    this.mesh1.position.set(-1.05, 5.0, 0);
    this.mesh2.position.set(1.05, 5.0, 0);
    
    // 2. 位置を変えてから表示状態にする
    this.mesh1.visible = true;
    this.mesh2.visible = true;
    this.render();

    let done1 = false, done2 = false;
    const check = () => {
      if (done1 && done2) {
        if (onComplete) onComplete();
      }
    };

    // 3. 上空から即座に落下開始
    this.animateDrop(this.mesh1, -1.05, val1, 0, () => { done1 = true; check(); });
    this.animateDrop(this.mesh2, 1.05, val2, 40, () => { done2 = true; check(); });
  }

  animateDrop(mesh, targetX, targetValue, delay, onFinish) {
    // delay中も画面に古い位置が出ないよう、開始直前まで位置を固定
    const startY = 4.8;
    mesh.position.set(targetX, startY, 0);

    setTimeout(() => {
      const startTime = performance.now();
      const duration = 1000;

      const targetEuler = this.FaceRotations[targetValue];
      const settleTilt = (targetX < 0 ? -1 : 1) * 0.08;
      const targetQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(targetEuler.x, targetEuler.y, targetEuler.z + settleTilt)
      );

      const extraTurnsX = Math.floor(Math.random() * 2) + 3;
      const extraTurnsY = Math.floor(Math.random() * 2) + 3;
      const totalAngleX = extraTurnsX * Math.PI * 2;
      const totalAngleY = extraTurnsY * Math.PI * 2;
      const driftX = (Math.random() - 0.5) * 0.4;

      let b1 = false, b2 = false;

      const frame = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        let y = 0;
        if (progress < 0.44) {
          const p = progress / 0.44;
          y = startY * (1 - p * p);
        } else if (progress < 0.74) {
          if (!b1) {
            audio.playDiceHit(0.8, targetX);
            b1 = true;
          }
          const p = (progress - 0.44) / 0.3;
          y = Math.sin(p * Math.PI) * 1.15;
        } else if (progress < 0.92) {
          if (!b2) {
            audio.playDiceHit(0.4, targetX);
            b2 = true;
          }
          const p = (progress - 0.74) / 0.18;
          y = Math.sin(p * Math.PI) * 0.3;
        } else {
          y = 0;
        }

        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const remain = 1 - easeProgress;

        const rotX = targetEuler.x + totalAngleX * remain;
        const rotY = targetEuler.y + totalAngleY * remain;
        const rotZ = (targetEuler.z + settleTilt) + Math.sin(progress * Math.PI) * 0.35;

        mesh.rotation.set(rotX, rotY, rotZ);
        mesh.position.set(targetX + driftX * remain, y, 0);

        this.render();

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          audio.playDiceHit(0.18, targetX);
          mesh.position.set(targetX, 0, 0);
          mesh.quaternion.copy(targetQuat);
          this.render();
          onFinish();
        }
      };

      requestAnimationFrame(frame);
    }, delay);
  }
