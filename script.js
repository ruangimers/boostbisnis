document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prompt-form');
    const generateBtn = document.getElementById('generate-btn');
    const outputId = document.getElementById('output-id');
    const outputEn = document.getElementById('output-en');

    //const dictionary = {
        "seekor kucing oranye": "an orange cat",
        "sedang bermain dengan bola benang": "playing with a ball of yarn",
        "dengan ekspresi ceria dan penasaran": "with a cheerful and curious expression",
        "di sebuah ruang tamu yang nyaman": "in a cozy living room",
        "suara dengkuran lembut dan musik lofi": "soft purring sounds and lofi music",
        "fokus pada detail bulu kucing dan pantulan cahaya di matanya.": "focus on the details of the cat's fur and the reflection of light in its eyes.",
        "buram, kualitas rendah, cacat digital, teks, watermark.": "blurry, low quality, digital artifacts, text, watermark.",
        // Tambahkan terjemahan umum lainnya di sini jika perlu
    };

    function translate(text, lang = 'en') {
        if (lang === 'en' && dictionary[text.toLowerCase()]) {
            return dictionary[text.toLowerCase()];
        }
        // Jika tidak ada di kamus, kembalikan teks asli (untuk input bebas)
        // Dalam aplikasi nyata, ini akan memanggil API terjemahan.
        // Di sini kita hanya akan mencoba menerjemahkan kata per kata sederhana.
        if (lang === 'en') {
            // Ini adalah placeholder sederhana. Untuk hasil terbaik, terjemahan harus lebih canggih.
            // Namun, untuk tujuan ini, kita akan fokus pada struktur prompt.
            // Pengguna harus menerjemahkan input kustom mereka sendiri untuk hasil terbaik.
            return text; 
        }
        return text;
    }

    function generatePrompts() {
        const get = (id) => document.getElementById(id).value.trim();
        const getSelected = (id) => {
            const select = document.getElementById(id);
            const selectedOption = select.options[select.selectedIndex];
            return {
                id_val: selectedOption.value,
                en_val: selectedOption.getAttribute('data-en'),
            };
        };

        const data = {
            subjek: get('subjek'),
            aksi: get('aksi'),
            ekspresi: get('ekspresi'),
            tempat: get('tempat'),
            waktu: getSelected('waktu'),
            kamera: getSelected('kamera'),
            pencahayaan: getSelected('pencahayaan'),
            gaya: getSelected('gaya'),
            suasana: getSelected('suasana'),
            durasi: getSelected('durasi'),
            suara: get('suara'),
            ucapan: get('ucapan'),
            detail: get('detail'),
            negatif: get('negatif'),
        };

        // Membuat Prompt Bahasa Indonesia
        let promptId = `Sebuah video ${data.gaya.id_val} dengan durasi ${data.durasi.id_val}, menampilkan ${data.subjek} ${data.aksi} ${data.ekspresi}. `;
        promptId += `Berlatar di ${data.tempat} pada ${data.waktu.id_val}. `;
        promptId += `Suasana video terasa ${data.suasana.id_val} dengan ${data.pencahayaan.id_val}. `;
        promptId += `Gerakan kamera menggunakan gaya ${data.kamera.id_val}. `;
        if(data.suara) promptId += `Terdengar ${data.suara}. `;
        if(data.detail) promptId += `Detail tambahan: ${data.detail}. `;
        if(data.ucapan) promptId += `Karakter mengucapkan: "${data.ucapan}". `;
        if(data.negatif) promptId += `\n\n--neg ${data.negatif}`;
        
        outputId.value = promptId.replace(/\s+/g, ' ').trim();

        // Membuat Prompt Bahasa Inggris
        // Menerjemahkan input text-based
        const subjekEn = translate(data.subjek, 'en');
        const aksiEn = translate(data.aksi, 'en');
        const ekspresiEn = translate(data.ekspresi, 'en');
        const tempatEn = translate(data.tempat, 'en');
        const suaraEn = translate(data.suara, 'en');
        const detailEn = translate(data.detail, 'en');
        const negatifEn = translate(data.negatif, 'en');

        let promptEn = `A ${data.gaya.en_val} video, ${data.durasi.en_val} long, featuring ${subjekEn} ${aksiEn} ${ekspresiEn}. `;
        promptEn += `The scene is set in ${tempatEn} during the ${data.waktu.en_val}. `;
        promptEn += `The video has a ${data.suasana.en_val} mood with ${data.pencahayaan.en_val}. `;
        promptEn += `The camera movement is a ${data.kamera.en_val}. `;
        if(suaraEn) promptEn += `Sounds of ${suaraEn} are heard. `;
        if(detailEn) promptEn += `Additional details: ${detailEn}. `;
        if(data.ucapan) promptEn += `The character says: "${data.ucapan}". `; // ucapan tidak diterjemahkan
        if(negatifEn) promptEn += `\n\n--neg ${negatifEn}`;

        outputEn.value = promptEn.replace(/\s+/g, ' ').trim();
    }

    generateBtn.addEventListener('click', generatePrompts);
    
    // Inisialisasi dengan contoh saat halaman dimuat
    // Mengisi form dengan contoh
    //document.getElementById('subjek').value = 'Seekor kucing oranye';
    //document.getElementById('aksi').value = 'sedang bermain dengan bola benang';
    //document.getElementById('ekspresi').value = 'dengan ekspresi ceria dan penasaran';
    //document.getElementById('tempat').value = 'di sebuah ruang tamu yang nyaman';
    //document.getElementById('suara').value = 'Suara dengkuran lembut dan musik lofi';
    //document.getElementById('detail').value = 'Fokus pada detail bulu kucing dan pantulan cahaya di matanya.';
    //document.getElementById('negatif').value = 'Buram, kualitas rendah, cacat digital, teks, watermark.';
    
    // Generate prompt awal
    generatePrompts();
});
