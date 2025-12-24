let enterLinkBlock: HTMLElement | null = document.getElementById('enter-link');
let setupQRCodeBlock: HTMLElement | null = document.getElementById('setup-qrcode');
let previewQRCode: HTMLElement | null = document.getElementById('preview-qrcode');
let firstButtonNext: HTMLElement | null = document.getElementById('first-next-button');
let secondButtonNext: HTMLElement | null = document.getElementById('second-next-button');
let downloadButton: HTMLElement | null = document.getElementById('download-button');
let inputLink = document.getElementById('input-link') as HTMLInputElement | null;
let foregroundColor = document.getElementById('foreground-color') as HTMLInputElement | null;
let backgroundColor = document.getElementById('background-color') as HTMLInputElement | null;
let sizeQRCode = document.getElementById('qrcode-size') as HTMLInputElement | null;
let qrcode: HTMLElement | null = document.getElementById('qrcode');

let link: string;
let foreground: string;
let background: string;
let size: number;

firstButtonNext?.addEventListener('click', function () {
	if (enterLinkBlock && setupQRCodeBlock && inputLink) {
		if (inputLink.value.trim()) {
			enterLinkBlock.style.display = 'none';
			setupQRCodeBlock.style.display = 'flex';
			link = inputLink.value.trim();
		}
	}
});

secondButtonNext?.addEventListener('click', function () {
	if (setupQRCodeBlock && previewQRCode && foregroundColor && backgroundColor && sizeQRCode) {
		if (sizeQRCode.value.trim()) {
			setupQRCodeBlock.style.display = 'none';
			previewQRCode.style.display = 'flex';
			foreground = foregroundColor.value;
			background = backgroundColor.value;
			size = Number(sizeQRCode.value.trim());
		}

		generateQRCode();
	}
});

downloadButton?.addEventListener('click', function () {
	let img = qrcode?.querySelector('img') as HTMLImageElement;

	if (qrcode && img) {
		let link = document.createElement('a');
		link.href = img.src;
		link.download = 'qrcode.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
});

function generateQRCode(): void {
	// @ts-ignore
	// eslint-disable-next-line
	let newQRCode = new QRCode(qrcode, {
		text: link,
		width: size,
		height: size,
		colorDark: `${foreground}`,
		colorLight: `${background}`,
		// @ts-ignore
		// eslint-disable-next-line
		correctLevel: QRCode.CorrectLevel.H
	});
}
