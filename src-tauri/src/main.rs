// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::dialog::blocking::FileDialogBuilder;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![open])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
async fn open() -> String {
    let Some(file_path) = FileDialogBuilder::new().pick_file() else {
        return String::new();
    };
    std::fs::read_to_string(file_path).unwrap_or_default()
}
