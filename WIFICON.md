## Edit /etc/network/interfaces ##

auto lo

iface lo inet loopback
iface eth0 inet dhcp

auto wlan0
iface wlan0 inet dhcp
wpa-ssid YourNetworkSSID
wpa-psk YourNetworkPassphrase

auto wlan1
iface wlan1 inet dhcp
wpa-ssid ardrone-xxx # or whatever your ardrone SDID is

## Then edit /etc/wpa_supplicant/wpa_supplicant.conf ##

ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
  ssid="YourNetworkSSID"
  psk="YourNetworkPassphrase"
  proto=RSN
  key_mgmt=WPA-PSK
  pairwise=CCMP
  auth_alg=OPEN
}

network={
  ssid="ardrone-xxx"
  key_mgmt=WPA
}
