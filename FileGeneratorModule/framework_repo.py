import subprocess

def clone_and_run(repository_url, destination_path, commands):
    try:
        # Clone the repository
        subprocess.run(["git", "clone", repository_url, destination_path], check=True)

        # Change to the cloned repository directory
        subprocess.run(["cd", destination_path], shell=True, check=True)

        # Run the specified commands
        for command in commands:
            subprocess.run(command, shell=True, check=True)

        print("Repository cloned and commands executed successfully.")

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

# Example usage
repository_url = "https://github.com/spring-projects/spring-boot.git"
destination_path = "cloned_repo"
commands_to_run = [
    # "echo 'Running command 1'",
   
 
]

clone_and_run(repository_url, destination_path, commands_to_run)
