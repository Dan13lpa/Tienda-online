#!/bin/bash

rsync -avz -e ssh production:/var/www/Tienda-online/api/src/storage /home/backupuser/backup

rsync -avz --delete --link-dest=/home/backupuser/backup.snar -e ssh production:/var/www/Tienda-online/api/src/storage /home/backupuser/backup

rsync -av --delete /home/backupuser/backup/ /home/backupuser/backup.snar
