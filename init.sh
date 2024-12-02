sudo apt install ydotool

sudo chmod +x run-kiosk.sh
sudo chmod +x hide-cursor.sh

sudo mv /usr/share/plymouth/themes/pix/splash.png /usr/share/plymouth/themes/pix/splash-default.png
sudo cp -f img/splash.png /usr/share/plymouth/themes/pix

sudo mv /home/mzp-1/.config/wayfire.ini /home/mzp-1/.config/wayfire-default.ini
sudo cp -f wayfire.ini /home/mzp-1/.config/wayfire.ini