#!/bin/bash

rsync -avz -e ssh production:/var/www/Tienda-online/api/src/storage /home/backupuser/backup
