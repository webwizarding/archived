echo "Welcome to API setup\n"
echo "We will start installing packages you have 10 seconds to exit"
sleep 10
echo "Updating the system..."
apt update -y
apt upgrade -y
echo "Installing required packages.."
apt install php php-curl apache2 screen mariadb-server mariadb-client -y
echo "Packages has been installed it will start the MySQL setup if you already set it up click CTRL + C"
