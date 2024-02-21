def save_to_file(content, file_path):
    generated_content = content
    with open(file_path, "w") as file:
        file.write(generated_content)
    print(f"Model class generated and saved to {file_path}")
