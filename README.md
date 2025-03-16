# Setting Up an SSH Key for GitHub

## 1. Generate an SSH Key
Run the following command to generate a new SSH key:

```sh
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

- When prompted, enter a file name to save the key (or press **Enter** to use the default location: `~/.ssh/id_rsa`).
- Optionally, set a passphrase for added security.

---

## 2. Start the SSH Agent
Ensure the SSH agent is running:

```sh
eval "$(ssh-agent -s)"
```

Add the SSH key to the agent:

```sh
ssh-add ~/.ssh/id_rsa
```

Replace `id_rsa` with your actual key file if you named it differently.

---

## 3. Add the SSH Key to GitHub
Retrieve the public key:

```sh
cat ~/.ssh/id_rsa.pub
```

- Copy the output and go to **GitHub → Settings → SSH and GPG keys**.
- Click **New SSH Key**, paste the key, and save it.

---

## 4. Test the SSH Connection
Verify that your SSH key is set up correctly:

```sh
ssh -T git@github.com
```

If successful, you will see a message like:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

Your SSH key is now configured for GitHub! 🚀
