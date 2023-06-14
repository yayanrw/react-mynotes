const app = {
  id: {
    appName: "CatatanKuKeren",
    appQuote:
      "Membuat catatan tidak hanya tentang menangkap detail, tetapi juga ruang untuk refleksi, kejelasan, dan pertumbuhan pribadi. Ini membantu memproses pemikiran, melacak kemajuan, dan membudayakan rasa syukur, menjadikannya alat yang kuat untuk penemuan diri.",
    courseName: "Membangun Aplikasi Catatan Menggunakan React",
    applyDarkMode: "Terapkan mode gelap",
    applyLightMode: "Terapkan mode terang",
  },
  en: {
    appName: "MyAwesomeNote",
    appQuote:
      "Creating a notes isn't just about capturing details, it's a space for reflection, clarity, and personal growth. It helps process thoughts, track progress, and cultivate gratitude, making it a powerful tool for self-discovery.",
    courseName: "Building a Note Application Using React",
    applyDarkMode: "Apply dark mode",
    applyLightMode: "Apply night mode",
  },
};

const nav = {
  id: {
    addNewNote: "Tambah Catatan Baru",
    activeNotes: "Catatan Aktif",
    archivedNotes: "Arsip Catatan",
  },
  en: {
    addNewNote: "Add new note",
    activeNotes: "Active notes",
    archivedNotes: "Archived notes",
  },
};

const card = {
  id: {
    detail: "Detail",
    archive: "Arsipkan",
    unArchive: "Buka Arsip",
    delete: "Hapus",
    newNote: "Catatan Baru",
    detailNote: "Detail Catatan",
  },
  en: {
    detail: "Detail",
    archive: "Archive",
    unArchive: "UnArchive",
    delete: "Delete",
    newNote: "New Note",
    detailNote: "Detail Note",
  },
};

const input = {
  id: {
    title: "Judul",
    detail: "Detail",
    createdAt: "Dibuat pada",
    titlePlaceholder: "Ketik judul catatanmu di sini",
    detailPlaceholder: "Ketik detail catatanmu di sini",
    searchPlaceholder: "Cari catatan keren mu...",
    search: "Cari",
    submit: "Simpan",
    emailLabel: "Alamat Email",
    passwordLabel: "Kata Sandi",
    confirmPassword: "Konfirmasi Kata Sandi",
    login: "Masuk",
    dontHaveAccount: "Tidak punya akun?",
    register: "Daftar",
    loading: "Memuat",
  },
  en: {
    title: "Title",
    detail: "Detail",
    createdAt: "Created At",
    titlePlaceholder: "Type your awesome note title",
    detailPlaceholder: "Type your awesome note detail",
    searchPlaceholder: "Search your awesome notes...",
    search: "Search",
    submit: "Submit",
    emailLabel: "Email address",
    passwordLabel: "Password",
    confirmPassword: "Confirm Password",
    login: "Login",
    dontHaveAccount: "Don't have an account?",
    register: "Register",
    loading: "Loading",
  },
};

const swal = {
  id: {
    areYouSure: "Apakah kamu yakin?",
    errorWarn: "Terjadi kesalahan, silahkan coba lagi.",
    insertDataWarn: "Apakah kamu ingin menyimpan catatanmu?",
    deleteDataWarn: "Apakah kamu ingin menghapus catatan ini?",
    archiveDataWarn: "Apakah kamu ingin mengarsipkan catatan ini?",
    unArchiveDataWarn: "Apakah kamu ingin membuka arsip catatan ini?",
    insertIt: "Simpan",
    deleteIt: "Hapus",
    archiveIt: "Arsipkan",
    unArchiveIt: "Buka Arsip",
    tryAgain: "Coba Lagi",
    insertSuggest: "Berhasil Disimpan",
    deleteSuggest: "Berhasil Dihapus",
    archiveSuggest: "Berhasil Diarsipkan",
    unArchiveSuggest: "Berhasil Dibuka dari Arsip",
    success: "Berhasil!",
    noNotes: "Ups, tidak ada catatan yang tersedia. Ayo buat catatan!",
    warning: "Peringatan",
    serverError: "Server Eror",
    anErrorOccured: "Telah terjadi kesalahan",
  },
  en: {
    areYouSure: "Are you sure?",
    errorWarn: "Error occured, please try again.",
    insertDataWarn: "Do you want to save this awesome note?",
    deleteDataWarn: "Do you want to delete this awesome note?",
    archiveDataWarn: "Do you want to archive this awesome note?",
    unArchiveDataWarn: "Do you want to unArchive this awesome note?",
    insertIt: "Save",
    deleteIt: "Delete",
    archiveIt: "Archive",
    unArchiveIt: "UnArchive",
    tryAgain: "Try again",
    insertSuggest: "Inserted Successfully",
    deleteSuggest: "Deleted Successfully",
    archiveSuggest: "Archived Successfully",
    unArchiveSuggest: "UnArchived Successfully",
    success: "Success!",
    noNotes: "Whoops there's no awesome notes, lets create it!",
    warning: "Warning",
    serverError: "Server Error",
    anErrorOccured: "An error occurred",
  },
};

const pageNotFound = {
  id: {
    message: "404 - Halaman tidak ditemukan",
    detailMessage: "Halaman yang Anda cari tidak ditemukan",
  },
  en: {
    message: "404 - Page Not Found",
    detailMessage: "The page you are looking for does not exist.",
  },
};

export const contents = { app, nav, card, input, swal, pageNotFound };
