fx_version "cerulean"
games {"common"}

author "klandestino"
version "1.0.0"

client_scripts {
    'client/interface.lua',
    'client/main.lua',
}

server_scripts {
    "server/main.lua",
}

lua54 'yes'

ui_page 'web/build/index.html'

files {
    'web/build/index.html',
    'web/build/**/*',
}