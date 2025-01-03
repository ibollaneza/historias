document.getElementById('generateStory').addEventListener('click', generateStory);
document.getElementById('exportStory').addEventListener('click', exportStory);

function generateStory() {
    const genre = document.getElementById('genre').value;
    const tone = document.getElementById('tone').value;
    const character = document.getElementById('character').value;
    const setting = document.getElementById('setting').value;

    let story = `En un escenario ${setting}, un personaje llamado ${character} `;

    switch (genre) {
        case 'comedia':
            story += 'se encontraba en una situación cómica donde ';
            break;
        case 'terror':
            story += 'vivía una experiencia espeluznante cuando ';
            break;
        case 'romance':
            story += 'se enamoró inesperadamente cuando ';
            break;
    }

    switch (tone) {
        case 'serio':
            story += 'todo tomó un giro serio cuando ';
            break;
        case 'humoristico':
            story += 'todo se volvió más divertido cuando ';
            break;
    }

    story += 'las cosas comenzaron a cambiar de manera sorprendente.';

    document.getElementById('storyText').innerText = story;
}

function exportStory() {
    const story = document.getElementById('storyText').innerText;
    const blob = new Blob([story], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'historia.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
