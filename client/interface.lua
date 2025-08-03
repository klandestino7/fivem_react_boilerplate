UIRoutes = {}

RegisterNUICallback('useUIRoute', function(data, cb)
    local route, data = data.route, data.data

    local handler = UIRoutes[route]

    assert(handler ~= nil, ('Rota (%s) inválida'):format(route))

    local response = handler(data) or {}

    cb(response)
end)

function sendReactMessage(action, data)
    SendNuiMessage(
        json.encode({
            action = action,
            data = data,
        })
    )
end
