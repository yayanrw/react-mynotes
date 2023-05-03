const app = {
  id: {
    appName: "CatatanKuKeren",
    appQuote:
      "Membuat catatan tidak hanya tentang menangkap detail, tetapi juga ruang untuk refleksi, kejelasan, dan pertumbuhan pribadi. Ini membantu memproses pemikiran, melacak kemajuan, dan membudayakan rasa syukur, menjadikannya alat yang kuat untuk penemuan diri.",
    courseName: "Membangun Aplikasi Catatan Menggunakan React",
  },
  en: {
    appName: "MyAwesomeNote",
    appQuote:
      "Creating a notes isn't just about capturing details, it's a space for reflection, clarity, and personal growth. It helps process thoughts, track progress, and cultivate gratitude, making it a powerful tool for self-discovery.",
    courseName: "Building a Note Application Using React",
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
    unarchive: "Buka Arsip",
    delete: "Hapus",
    newNote: "Catatan Baru",
    detailNote: "Detail Catatan",
  },
  en: {
    detail: "Detail",
    archive: "Archive",
    unarchive: "Unarchive",
    delete: "Delete",
    newNote: "New Note",
    detailNote: "Detail Note",
  },
};

const input = {
  id: {
    title: "Judul",
    detail: "Detail",
    titlePlaceholder: "Ketik judul catatanmu di sini",
    detailPlaceholder: "Ketik detail catatanmu di sini",
    searchPlaceholder: "Cari catatan keren mu...",
    search: "Cari",
    submit: "Simpan",
  },
  en: {
    title: "Title",
    detail: "Detail",
    titlePlaceholder: "Type your awesome note title",
    detailPlaceholder: "Type your awesome note detail",
    searchPlaceholder: "Search your awesome notes...",
    search: "Search",
    submit: "Submit",
  },
};

const swal = {
  id: {
    areYouSure: "Apakah kamu yakin?",
    errorWarn: "Terjadi kesalahan, silahkan coba lagi.",
    insertDataWarn: "Apakah kamu ingin menyimpan catatanmu?",
    deleteDataWarn: "Apakah kamu ingin menghapus catatan ini?",
    archiveDataWarn: "Apakah kamu ingin mengarsipkan catatan ini?",
    unarchiveDataWarn: "Apakah kamu ingin membuka arsip catatan ini?",
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
  },
  en: {
    areYouSure: "Are you sure?",
    errorWarn: "Error occured, please try again.",
    insertDataWarn: "Do you want to save this awesome note?",
    deleteDataWarn: "Do you want to delete this awesome note?",
    archiveDataWarn: "Do you want to archive this awesome note?",
    unarchiveDataWarn: "Do you want to unarchive this awesome note?",
    insertIt: "Save",
    deleteIt: "Delete",
    archiveIt: "Archive",
    unArchiveIt: "Unarchive",
    tryAgain: "Try again",
    insertSuggest: "Inserted Successfully",
    deleteSuggest: "Deleted Successfully",
    archiveSuggest: "Archived Successfully",
    unArchiveSuggest: "Unarchived Successfully",
    success: "Success!",
    noNotes: "Whoops there's no awesome notes, lets create it!",
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

export const myContents = { app, nav, card, input, swal, pageNotFound };
