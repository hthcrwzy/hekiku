// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;

use tauri::api::dialog::blocking::FileDialogBuilder;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![open])
        .run(context)
        .expect("error while running tauri application");
}

#[tauri::command]
async fn open() -> String {
    let Some(path) = FileDialogBuilder::new().pick_file() else {
        return String::new();
    };
    fs::read_to_string(path).unwrap_or_default()
}
