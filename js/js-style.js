// Canvas animado para fondo tecnológico
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('techCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        createNodes();
    });

    const nodes = [];
    const nodeCount = 80;
    const maxDistance = 180;

    function createNodes() {
        nodes.length = 0;
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 1.2,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 1,
                color: Math.random() > 0.7 ? '#F5B52E' : '#3A5F8F'
            });
        }
    }

    function drawCircuit() {
        ctx.clearRect(0, 0, width, height);

        // Fondo degradado
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(11, 11, 13, 0.1)');
        gradient.addColorStop(1, 'rgba(31, 42, 54, 0.1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < nodes.length; i++) {
            const nodeA = nodes[i];

            for (let j = i + 1; j < nodes.length; j++) {
                const nodeB = nodes[j];
                const dx = nodeB.x - nodeA.x;
                const dy = nodeB.y - nodeA.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const opacity = 0.7 - dist / maxDistance;
                    ctx.strokeStyle = `rgba(245, 181, 46, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    ctx.stroke();
                }
            }

            nodeA.x += nodeA.vx;
            nodeA.y += nodeA.vy;

            if (nodeA.x <= 0 || nodeA.x >= width) nodeA.vx *= -1;
            if (nodeA.y <= 0 || nodeA.y >= height) nodeA.vy *= -1;

            // Brillo del nodo
            const gradient = ctx.createRadialGradient(
                nodeA.x, nodeA.y, 0,
                nodeA.x, nodeA.y, nodeA.radius * 4
            );
            gradient.addColorStop(0, nodeA.color === '#F5B52E' ? 
                'rgba(245, 181, 46, 0.4)' : 'rgba(58, 95, 143, 0.4)');
            gradient.addColorStop(1, 'rgba(58, 95, 143, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(nodeA.x, nodeA.y, nodeA.radius * 4, 0, Math.PI * 2);
            ctx.fill();

            // Nodo central
            ctx.fillStyle = nodeA.color;
            ctx.beginPath();
            ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(drawCircuit);
    }

    createNodes();
    drawCircuit();
});