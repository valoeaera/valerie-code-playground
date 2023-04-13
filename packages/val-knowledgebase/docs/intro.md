---
title: My Linux Computer Setup
sidebar_position: 1
---

I've had to setup my computer so many times that I'm gonna document it here for when I inevitably need to do it again.

Last revised: 12 March 2023

### Operating System

I use [Linux Mint Cinnamon Edition](https://linuxmint.com/download.php). Download it from that link and, if you're on another Mint machine, you can `Right Click the ISO -> Create USB Installation` and follow the instructions.

### Terminal

1. Install zsh: `sudo apt install zsh`.
1. Confirm zsh binary path: `which zsh`.
1. Change shell to that path: `chsh -s /usr/bin/zsh` <- Replace `/usr/bin/zsh` with the output of the above command.
1. Restart the computer.
1. Install ohmyzsh: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`.
1. Install powerlevel10k: `git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k`.
1. Use powerlevel10k theme: Set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`.
1. Restart zsh with `exec zsh`.
1. Follow the powerlevel10k instructions.

### Firefox

1. Open Firefox.
1. Click the three horizontal bar option icon.
1. Click `Sign In` to sync settings.

### VSCode

1. Download `.deb` package from [VScode's website](https://code.visualstudio.com/docs/?dv=linux64_deb).
1. Double-click that downloaded package.
1. Clone all your [Github repos](https://github.com/valoeaera?tab=repositories) again.
1. Install languages: `sudo apt install nodejs && sudo apt install npm && sudo apt install php`.
1. Open Settings Sync: `File -> Preferences -> Turn on Settings Sync...`.
1. Click `Sign In & Sync` & `Sign in with Github`.

### Software Manager Stuff

- Discord
- Spotify

### Node JS Issues

1. `curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - && sudo apt install -y nodejs`
1. `sudo apt install nodejs -y`
1. `sudo dpkg -i --force-overwrite /var/cache/apt/archives/nodejs_19.7.0-deb-1nodesource1_amd64.deb`
1. `sudo apt -f install`
1. `sudo apt autoremove`
1. `node -v`
