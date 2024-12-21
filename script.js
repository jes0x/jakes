// Fungsi untuk memproses form dan menampilkan hasil di dalam halaman yang sama
function submitForm(event) {
    event.preventDefault(); // Mencegah form dari reload halaman
    
    // Mengambil data dari form
    const data = {
        healthCondition: document.querySelector('input[name="healthCondition"]:checked')?.value,
        occupation: document.querySelector('input[name="occupation"]:checked')?.value,
        family: document.querySelector('input[name="family"]:checked')?.value,
        income: document.querySelector('input[name="income"]:checked')?.value,
        additionalServices: document.querySelector('input[name="additionalServices"]:checked')?.value // Layanan tambahan
    }

    // Logika rekomendasi untuk jenis jaminan kesehatan
    let result = '';

    // Tentukan jenis jaminan berdasarkan data
    if (data.income === '<2' && data.occupation === 'informal') {
        result = 'BPJS Penerima PBI';
        window.location.href = 'hasiljaminan1.html'; // Redirect ke halaman BPJS Penerima PBI
    } else if (data.income === '2-5' && data.occupation === 'informal') {
        result = 'BPJS Non-Penerima PBI';
        window.location.href = 'hasiljaminan2.html'; // Redirect ke halaman BPJS Non-Penerima PBI
    } else if (data.occupation === 'formal' && data.income === '2-5') {
        result = 'Jamskeda';
        window.location.href = 'hasiljaminan3.html'; // Redirect ke halaman Jamskeda
    } else if (data.income === '>5') {
        result = 'Asuransi Swasta';
        window.location.href = 'hasiljaminan4.html'; // Redirect ke halaman Asuransi Swasta
    } else {
        result = 'Asuransi Perusahaan';
        window.location.href = 'hasiljaminan5.html'; // Redirect ke halaman Asuransi Perusahaan
    }
}
