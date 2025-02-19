const inputTxt =document.getElementById("input")
const image = document.getElementById("image")
const button =document.getElementById("btn")


async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
		{
			headers: {
				Authorization: "Bearer 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",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function () {
    query().then((response) => {
        // Use image
        const objectURL=URL.createObjectURL(response)
        image.src = objectURL
    });
})
