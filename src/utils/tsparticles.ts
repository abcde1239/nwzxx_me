export const tsParticlesOptions = {
    background: {
        color: '#1a0b2e',
        image: "url('/img/jill-and-boss.jpg')",
        position: 'center',
        repeat: 'no-repeat',
        size: 'cover',
    },
    particles: {
        number: { value: 0 },
        color: {
            value: ['#00f5d4', '#9b5de5', '#f15bb5', '#00bbf9', '#fee440', '#ff7b00', '#ff4d6d'],
        },
        shape: { type: ['square', 'triangle', 'circle', 'polygon'] },
        opacity: { value: 0.9 },
        size: { value: { min: 5, max: 10 } },
        move: { enable: true, speed: 0.7, outModes: 'destroy' },
        life: { duration: { value: 3, sync: false } },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: 'trail' },
        },
        modes: {
            trail: {
                delay: 0.3,
                quantity: 1,
                particles: {
                    links: {
                        enable: true,
                        distance: 80,
                        color: '#7fcb4dff',
                        opacity: 1,
                        width: 1,
                    },
                    life: { duration: { value: 4 } },
                    size: { value: { min: 5, max: 10 } },
                    shape: { type: ['square', 'triangle', 'circle', 'polygon'] },
                    color: {
                        value: [
                            '#00f5d4',
                            '#9b5de5',
                            '#f15bb5',
                            '#00bbf9',
                            '#fee440',
                            '#ff7b00',
                            '#ff4d6d',
                        ],
                    },
                },
            },
        },
    },
    detectRetina: true,
};
