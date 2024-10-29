document.addEventListener('DOMContentLoaded', () => {
    fetch('archives.json')
        .then(response => response.json())
        .then(archives => {
            const archivesContainer = document.getElementById('archives');

            archives.forEach(archive => {
                const archiveItem = document.createElement('div');
                archiveItem.className = 'archive-item';

                const archiveTitle = document.createElement('h3');
                archiveTitle.textContent = archive.title;

                const archiveDescription = document.createElement('p');
                archiveDescription.textContent = archive.description;

                const archiveAuthor = document.createElement('p');
                archiveAuthor.textContent = `Author: ${archive.author}`;

                const readMoreLink = document.createElement('a');
                readMoreLink.href = archive.link;
                readMoreLink.textContent = 'Read More';

                archiveItem.appendChild(archiveTitle);
                archiveItem.appendChild(archiveDescription);
                archiveItem.appendChild(archiveAuthor);
                archiveItem.appendChild(readMoreLink);

                archivesContainer.appendChild(archiveItem);
            });
        })
        .catch(error => console.error('Error fetching archives:', error));
});
