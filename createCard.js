export default function createCard(title = 'Заголовок', description = "Описание") {
  return `
    <div class="card">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}