export default function run() {
    let divElement = `
        <div class="test-elem">This is a test elem</div>
    `;
    document.body.insertAdjacentElement('beforeend', divElement);
}
