import { useRef, useEffect } from "react";

export function Canvas() {
    const canvasRef = useRef(null);

    let point = [];
    let maxDistance = 150;
    let min = 30;
    let mouse = { x: null, y: null, radius: 250 };

    function verifDistance(x, y, point, min) {
        for (const p of point) {
            let dx = x - p.x;
            let dy = y - p.y;
            if (Math.sqrt(dx * dx + dy * dy) < min) {
                return false;
            }
        }
        return true;
    }

    function drawPoint(ctx, x, y, radius, opa) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,255,${opa})`;
        ctx.fill();
        ctx.closePath();
    }

    function distance(p1, p2) {
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    function drawLigne(ctx, p1, p2, opa) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 255, 255, ${opa})`;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        

        function resizeCanvas() {
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }
        
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);


        while (point.length < 100) {
            let speed = Math.random() * 0.40 + 0.20;
            let angle = Math.random() * Math.PI * 2;
            let rdmX = Math.random() * canvas.width;
            let rdmY = Math.random() * canvas.height;
            let rdmR = Math.random() * 3 + 1;
            let rdmSx = Math.cos(angle) * speed * (Math.random() > 0.5 ? -1 : 1);
            let rdmSy = Math.sin(angle) * speed * (Math.random() > 0.5 ? -1 : 1);

            if (verifDistance(rdmX, rdmY, point, min)) {
                point.push({
                    x: rdmX,
                    y: rdmY,
                    r: rdmR,
                    sx: rdmSx,
                    sy: rdmSy,
                    opa: Math.random() * 0.5 + 0.4
                });
            }
        }

        let animationFrameId;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const p of point) {
                drawPoint(ctx, p.x, p.y, p.r, p.opa);

                if (mouse.x && mouse.y) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const repulse = Math.pow(force, 0.7) * 5;

                        p.x += p.sx + (dx / dist) * repulse;
                        p.y += p.sy + (dy / dist) * repulse;
                    } else {
                        p.x += p.sx;
                        p.y += p.sy;
                    }
                } else {
                    p.x += p.sx;
                    p.y += p.sy;
                }
                if (p.x >= canvas.width || p.y >= canvas.height || p.x <= 0 || p.y <= 0) {
                    let speed = Math.random() * 0.40 + 0.20;
                    let angle = Math.random() * Math.PI * 2;
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                    p.r = Math.random() * 3 + 1;
                    p.sx = Math.cos(angle) * speed * (Math.random() > 0.5 ? -1 : 1);
                    p.sy = Math.sin(angle) * speed * (Math.random() > 0.5 ? -1 : 1);
                }
            }

            for (let i = 0; i < point.length; i++) {
                for (let j = i + 1; j < point.length; j++) {
                    let d = distance(point[i], point[j]);
                    if (d < maxDistance) {
                        drawLigne(ctx, point[i], point[j], 1 - d / maxDistance);
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}