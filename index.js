const _0x13aaf8 = _0x46a1;
(function (_0xc5aee6, _0x3c21b0) {
    const _0xb0f7a7 = _0x46a1, _0x535f37 = _0xc5aee6();
    while (!![]) {
        try {
            const _0x1c830a = parseInt(_0xb0f7a7(0x1cc)) / (0x220a * -0x1 + 0x1383 + -0x8 * -0x1d1) + -parseInt(_0xb0f7a7(0x3a8)) / (0xc * 0x9e + -0x1c85 + 0x151f * 0x1) * (parseInt(_0xb0f7a7(0x1c2)) / (0x2419 + 0x76 + -0x1 * 0x248c)) + parseInt(_0xb0f7a7(0x1fc)) / (0x1b73 + -0x23 * -0xa3 + -0xc6e * 0x4) * (parseInt(_0xb0f7a7(0x3a6)) / (-0xffe + 0x84 * -0x13 + 0x19cf)) + parseInt(_0xb0f7a7(0x342)) / (0x4 * 0x7cc + 0x5 * -0x1f7 + 0x9 * -0x25f) + -parseInt(_0xb0f7a7(0x36a)) / (-0x1ea7 + 0x1d42 + 0x16c * 0x1) + -parseInt(_0xb0f7a7(0x2ba)) / (0xadd + 0x1885 + 0x2 * -0x11ad) + parseInt(_0xb0f7a7(0x2d1)) / (-0x171c + 0x2454 + -0xd2f) * (parseInt(_0xb0f7a7(0x1f4)) / (-0x16dc * 0x1 + 0x1cfa + -0x614));
            if (_0x1c830a === _0x3c21b0)
                break;
            else
                _0x535f37['push'](_0x535f37['shift']());
        } catch (_0x308699) {
            _0x535f37['push'](_0x535f37['shift']());
        }
    }
}(_0x3423, -0x3c445 * 0x1 + 0x15ed8 + 0x45ab6));
const express = require(_0x13aaf8(0x3b4)), app = express(), axios = require(_0x13aaf8(0x33b)), os = require('os'), fs = require('fs'), path = require(_0x13aaf8(0x29e)), {promisify} = require(_0x13aaf8(0x1ed)), exec = promisify(require(_0x13aaf8(0x1c4) + _0x13aaf8(0x2c1))[_0x13aaf8(0x380)]), UPLOAD_URL = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x220)] || '', PROJECT_URL = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x3ae) + 'L'] || '', AUTO_ACCESS = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x35c) + 'S'] || ![], FILE_PATH = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x2c4)] || _0x13aaf8(0x185), SUB_PATH = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x2e2)] || _0x13aaf8(0x39a), PORT = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x1d9) + 'T'] || process[_0x13aaf8(0x3b3)][_0x13aaf8(0x24d)] || -0x248 * 0x8 + -0x119 * -0x11 + 0xb4f, UUID = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x1d4)] || _0x13aaf8(0x37e) + _0x13aaf8(0x2ae) + _0x13aaf8(0x1a0) + _0x13aaf8(0x2df), NEZHA_SERVER = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x2ea) + 'ER'] || '', NEZHA_PORT = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x221)] || '', NEZHA_KEY = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x357)] || '', ARGO_DOMAIN = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x247) + 'N'] || '', ARGO_AUTH = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x1ca)] || '', ARGO_PORT = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x2c9)] || -0x2ab8 + 0x1d4a + 0x2caf, CFIP = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x2cb)] || _0x13aaf8(0x18a) + 'an', CFPORT = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x31c)] || -0x1dc + 0x2138 + 0x1 * -0x1da1, NAME = process[_0x13aaf8(0x3b3)][_0x13aaf8(0x2b7)] || _0x13aaf8(0x1f0);
!fs[_0x13aaf8(0x37f)](FILE_PATH) ? (fs[_0x13aaf8(0x1ab)](FILE_PATH), console[_0x13aaf8(0x2dd)](FILE_PATH + (_0x13aaf8(0x29d) + 'd'))) : console[_0x13aaf8(0x2dd)](FILE_PATH + (_0x13aaf8(0x306) + _0x13aaf8(0x395)));
function generateRandomName() {
    const _0x5d4933 = _0x13aaf8, _0x302c7a = {
            'RNScz': _0x5d4933(0x1c7) + _0x5d4933(0x2cc) + _0x5d4933(0x2e4),
            'esTjm': function (_0x26df2a, _0x6f873) {
                return _0x26df2a < _0x6f873;
            },
            'VAPXQ': function (_0x383858, _0x4d0b78) {
                return _0x383858 * _0x4d0b78;
            }
        }, _0x240829 = _0x302c7a[_0x5d4933(0x25a)];
    let _0x975f6f = '';
    for (let _0x4f5bf8 = -0x1286 + 0x10b2 + 0x24 * 0xd; _0x302c7a[_0x5d4933(0x18e)](_0x4f5bf8, 0x1bb * 0xa + -0x1a6 + -0xfa2 * 0x1); _0x4f5bf8++) {
        _0x975f6f += _0x240829[_0x5d4933(0x1c9)](Math[_0x5d4933(0x32c)](_0x302c7a[_0x5d4933(0x2d5)](Math[_0x5d4933(0x264)](), _0x240829[_0x5d4933(0x22d)])));
    }
    return _0x975f6f;
}
const npmName = generateRandomName(), webName = generateRandomName(), botName = generateRandomName(), phpName = generateRandomName();
let npmPath = path[_0x13aaf8(0x295)](FILE_PATH, npmName), phpPath = path[_0x13aaf8(0x295)](FILE_PATH, phpName), webPath = path[_0x13aaf8(0x295)](FILE_PATH, webName), botPath = path[_0x13aaf8(0x295)](FILE_PATH, botName), subPath = path[_0x13aaf8(0x295)](FILE_PATH, _0x13aaf8(0x1c8)), listPath = path[_0x13aaf8(0x295)](FILE_PATH, _0x13aaf8(0x1b8)), bootLogPath = path[_0x13aaf8(0x295)](FILE_PATH, _0x13aaf8(0x28c)), configPath = path[_0x13aaf8(0x295)](FILE_PATH, _0x13aaf8(0x237) + 'n');
function deleteNodes() {
    const _0x55d612 = _0x13aaf8, _0x126267 = {
            'qxpBN': _0x55d612(0x2a5),
            'MqLzC': _0x55d612(0x1b2),
            'sXoNu': function (_0x3f6504, _0x46acab) {
                return _0x3f6504 === _0x46acab;
            },
            'uZFRX': _0x55d612(0x33f) + _0x55d612(0x23f)
        };
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x55d612(0x37f)](subPath))
            return;
        let _0x3e272b;
        try {
            _0x3e272b = fs[_0x55d612(0x325) + 'nc'](subPath, _0x126267[_0x55d612(0x393)]);
        } catch {
            return null;
        }
        const _0x5014ed = Buffer[_0x55d612(0x24c)](_0x3e272b, _0x126267[_0x55d612(0x2d8)])[_0x55d612(0x26b)](_0x126267[_0x55d612(0x393)]), _0x4bceae = _0x5014ed[_0x55d612(0x25d)]('\x0a')[_0x55d612(0x22a)](_0x3a41e3 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x55d612(0x2e7)](_0x3a41e3));
        if (_0x126267[_0x55d612(0x314)](_0x4bceae[_0x55d612(0x22d)], 0xdf9 * -0x1 + 0xec0 + -0xc7))
            return;
        return axios[_0x55d612(0x2f8)](UPLOAD_URL + (_0x55d612(0x36f) + _0x55d612(0x209)), JSON[_0x55d612(0x282)]({ 'nodes': _0x4bceae }), { 'headers': { 'Content-Type': _0x126267[_0x55d612(0x3a9)] } })[_0x55d612(0x1e3)](_0x19f2de => {
            return null;
        }), null;
    } catch (_0x2e924c) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0xfa9e3a = _0x13aaf8;
    try {
        const _0x1d138d = fs[_0xfa9e3a(0x37d) + 'c'](FILE_PATH);
        _0x1d138d[_0xfa9e3a(0x362)](_0x563205 => {
            const _0x4d2dcc = _0xfa9e3a, _0xc633bc = path[_0x4d2dcc(0x295)](FILE_PATH, _0x563205);
            try {
                const _0x1f5a62 = fs[_0x4d2dcc(0x396)](_0xc633bc);
                _0x1f5a62[_0x4d2dcc(0x388)]() && fs[_0x4d2dcc(0x1d0)](_0xc633bc);
            } catch (_0x1dc9f3) {
            }
        });
    } catch (_0xfe23f1) {
    }
}
function _0x46a1(_0x312856, _0x101444) {
    const _0x53f851 = _0x3423();
    return _0x46a1 = function (_0x3d2f01, _0x102bcd) {
        _0x3d2f01 = _0x3d2f01 - (0x6 * -0x7 + 0x2 * -0x542 + -0x1 * -0xc2d);
        let _0x255394 = _0x53f851[_0x3d2f01];
        return _0x255394;
    }, _0x46a1(_0x312856, _0x101444);
}
async function generateConfig() {
    const _0x3e8264 = _0x13aaf8, _0x19f9eb = {
            'qRJgt': _0x3e8264(0x377),
            'gAOkv': _0x3e8264(0x2ff),
            'fnPJk': _0x3e8264(0x2c7),
            'XARpR': _0x3e8264(0x191) + _0x3e8264(0x37c),
            'RvAcE': _0x3e8264(0x390) + 'o',
            'FZdJn': _0x3e8264(0x1fa) + 'o',
            'MhYHd': _0x3e8264(0x270) + 'go',
            'PHhtp': _0x3e8264(0x2c2),
            'mqoGy': _0x3e8264(0x2d0),
            'TBliV': _0x3e8264(0x2e5),
            'ZhpKu': _0x3e8264(0x2aa),
            'PUeOk': _0x3e8264(0x193),
            'KYTEP': _0x3e8264(0x281),
            'UsXXs': _0x3e8264(0x260),
            'xHxuK': _0x3e8264(0x3a7) + _0x3e8264(0x2e9) + _0x3e8264(0x333) + 'y',
            'pGwzo': _0x3e8264(0x258),
            'QTKcq': _0x3e8264(0x290),
            'OkPle': _0x3e8264(0x3a4),
            'IXTQY': _0x3e8264(0x1ff),
            'WouqQ': _0x3e8264(0x237) + 'n'
        }, _0x3f965d = {
            'log': {
                'access': _0x19f9eb[_0x3e8264(0x2d3)],
                'error': _0x19f9eb[_0x3e8264(0x2d3)],
                'loglevel': _0x19f9eb[_0x3e8264(0x2e1)]
            },
            'inbounds': [
                {
                    'port': ARGO_PORT,
                    'protocol': _0x19f9eb[_0x3e8264(0x190)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'flow': _0x19f9eb[_0x3e8264(0x301)]
                            }],
                        'decryption': _0x19f9eb[_0x3e8264(0x2e1)],
                        'fallbacks': [
                            { 'dest': 0xbb9 },
                            {
                                'path': _0x19f9eb[_0x3e8264(0x1eb)],
                                'dest': 0xbba
                            },
                            {
                                'path': _0x19f9eb[_0x3e8264(0x35a)],
                                'dest': 0xbbb
                            },
                            {
                                'path': _0x19f9eb[_0x3e8264(0x23e)],
                                'dest': 0xbbc
                            }
                        ]
                    },
                    'streamSettings': { 'network': _0x19f9eb[_0x3e8264(0x32a)] }
                },
                {
                    'port': 0xbb9,
                    'listen': _0x19f9eb[_0x3e8264(0x240)],
                    'protocol': _0x19f9eb[_0x3e8264(0x190)],
                    'settings': {
                        'clients': [{ 'id': UUID }],
                        'decryption': _0x19f9eb[_0x3e8264(0x2e1)]
                    },
                    'streamSettings': {
                        'network': _0x19f9eb[_0x3e8264(0x32a)],
                        'security': _0x19f9eb[_0x3e8264(0x2e1)]
                    }
                },
                {
                    'port': 0xbba,
                    'listen': _0x19f9eb[_0x3e8264(0x240)],
                    'protocol': _0x19f9eb[_0x3e8264(0x190)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'level': 0x0
                            }],
                        'decryption': _0x19f9eb[_0x3e8264(0x2e1)]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x19f9eb[_0x3e8264(0x2e1)],
                        'wsSettings': { 'path': _0x19f9eb[_0x3e8264(0x1eb)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x19f9eb[_0x3e8264(0x38a)],
                            _0x19f9eb[_0x3e8264(0x200)],
                            _0x19f9eb[_0x3e8264(0x367)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbb,
                    'listen': _0x19f9eb[_0x3e8264(0x240)],
                    'protocol': _0x19f9eb[_0x3e8264(0x184)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'alterId': 0x0
                            }]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'wsSettings': { 'path': _0x19f9eb[_0x3e8264(0x35a)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x19f9eb[_0x3e8264(0x38a)],
                            _0x19f9eb[_0x3e8264(0x200)],
                            _0x19f9eb[_0x3e8264(0x367)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbc,
                    'listen': _0x19f9eb[_0x3e8264(0x240)],
                    'protocol': _0x19f9eb[_0x3e8264(0x213)],
                    'settings': { 'clients': [{ 'password': UUID }] },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x19f9eb[_0x3e8264(0x2e1)],
                        'wsSettings': { 'path': _0x19f9eb[_0x3e8264(0x23e)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x19f9eb[_0x3e8264(0x38a)],
                            _0x19f9eb[_0x3e8264(0x200)],
                            _0x19f9eb[_0x3e8264(0x367)]
                        ],
                        'metadataOnly': ![]
                    }
                }
            ],
            'dns': { 'servers': [_0x19f9eb[_0x3e8264(0x30c)]] },
            'outbounds': [
                {
                    'protocol': _0x19f9eb[_0x3e8264(0x31b)],
                    'tag': _0x19f9eb[_0x3e8264(0x287)]
                },
                {
                    'protocol': _0x19f9eb[_0x3e8264(0x2fe)],
                    'tag': _0x19f9eb[_0x3e8264(0x391)]
                }
            ]
        };
    fs[_0x3e8264(0x3a5) + _0x3e8264(0x1e1)](path[_0x3e8264(0x295)](FILE_PATH, _0x19f9eb[_0x3e8264(0x374)]), JSON[_0x3e8264(0x282)](_0x3f965d, null, 0x691 * 0x4 + 0x2e * -0x41 + -0xe94));
}
function getSystemArchitecture() {
    const _0x340cd2 = _0x13aaf8, _0x5dded7 = {
            'EyhIc': function (_0x5c69e3, _0x16a197) {
                return _0x5c69e3 === _0x16a197;
            },
            'lvuCx': _0x340cd2(0x2a1),
            'JmBwp': _0x340cd2(0x1c3),
            'mSXLl': function (_0x2f5500, _0x2e2c2e) {
                return _0x2f5500 === _0x2e2c2e;
            },
            'BzxYM': _0x340cd2(0x205),
            'pVlyD': _0x340cd2(0x2f9)
        }, _0x390e0a = os[_0x340cd2(0x313)]();
    return _0x5dded7[_0x340cd2(0x24f)](_0x390e0a, _0x5dded7[_0x340cd2(0x2f3)]) || _0x5dded7[_0x340cd2(0x24f)](_0x390e0a, _0x5dded7[_0x340cd2(0x181)]) || _0x5dded7[_0x340cd2(0x1f3)](_0x390e0a, _0x5dded7[_0x340cd2(0x250)]) ? _0x5dded7[_0x340cd2(0x2f3)] : _0x5dded7[_0x340cd2(0x19d)];
}
function downloadFile(_0x535c46, _0x3ff8c0, _0x3ae162) {
    const _0x4ad893 = _0x13aaf8, _0xb97707 = {
            'pLrYC': function (_0x3f8c1e, _0xb1a295) {
                return _0x3f8c1e(_0xb1a295);
            },
            'COQkR': function (_0x3f4b06, _0x58b5dd, _0x430080) {
                return _0x3f4b06(_0x58b5dd, _0x430080);
            },
            'jNoJW': _0x4ad893(0x26a),
            'EbNqp': _0x4ad893(0x244),
            'qixLH': function (_0x222bc2, _0x53c999) {
                return _0x222bc2(_0x53c999);
            },
            'PJAzJ': _0x4ad893(0x2ab),
            'cVTPV': _0x4ad893(0x28d)
        }, _0x1b8563 = _0x535c46;
    !fs[_0x4ad893(0x37f)](FILE_PATH) && fs[_0x4ad893(0x1ab)](FILE_PATH, { 'recursive': !![] });
    const _0x918e7 = fs[_0x4ad893(0x239) + _0x4ad893(0x284)](_0x1b8563);
    _0xb97707[_0x4ad893(0x187)](axios, {
        'method': _0xb97707[_0x4ad893(0x1df)],
        'url': _0x3ff8c0,
        'responseType': _0xb97707[_0x4ad893(0x1e0)]
    })[_0x4ad893(0x27b)](_0x2e48fc => {
        const _0x2892d5 = _0x4ad893, _0x2592a8 = {
                'GixvW': function (_0x3ef712, _0x531494, _0x3abc73) {
                    const _0x2f1c37 = _0x46a1;
                    return _0xb97707[_0x2f1c37(0x21d)](_0x3ef712, _0x531494, _0x3abc73);
                }
            };
        _0x2e48fc[_0x2892d5(0x180)][_0x2892d5(0x20f)](_0x918e7), _0x918e7['on'](_0xb97707[_0x2892d5(0x1b3)], () => {
            const _0x4a7443 = _0x2892d5;
            _0x918e7[_0x4a7443(0x327)](), console[_0x4a7443(0x2dd)](_0x4a7443(0x230) + path[_0x4a7443(0x238)](_0x1b8563) + (_0x4a7443(0x34f) + _0x4a7443(0x30f))), _0x2592a8[_0x4a7443(0x229)](_0x3ae162, null, _0x1b8563);
        }), _0x918e7['on'](_0xb97707[_0x2892d5(0x392)], _0x14c854 => {
            const _0x2b697c = _0x2892d5;
            fs[_0x2b697c(0x225)](_0x1b8563, () => {
            });
            const _0x52fcbc = _0x2b697c(0x230) + path[_0x2b697c(0x238)](_0x1b8563) + _0x2b697c(0x1e8) + _0x14c854[_0x2b697c(0x2b1)];
            console[_0x2b697c(0x244)](_0x52fcbc), _0xb97707[_0x2b697c(0x187)](_0x3ae162, _0x52fcbc);
        });
    })[_0x4ad893(0x1e3)](_0x464906 => {
        const _0x3ef92d = _0x4ad893, _0x59a8d6 = _0x3ef92d(0x230) + path[_0x3ef92d(0x238)](_0x1b8563) + _0x3ef92d(0x1e8) + _0x464906[_0x3ef92d(0x2b1)];
        console[_0x3ef92d(0x244)](_0x59a8d6), _0xb97707[_0x3ef92d(0x387)](_0x3ae162, _0x59a8d6);
    });
}
async function downloadFilesAndRun() {
    const _0x16ef68 = _0x13aaf8, _0x479b2a = {
            'cLvqF': function (_0x2bd6fe, _0x1d3cd7) {
                return _0x2bd6fe(_0x1d3cd7);
            },
            'jTkPq': function (_0x535d1d, _0x565f58, _0x1cdbd0, _0x20aa75) {
                return _0x535d1d(_0x565f58, _0x1cdbd0, _0x20aa75);
            },
            'unVau': function (_0x28e045) {
                return _0x28e045();
            },
            'KdJWN': function (_0x5a23be, _0x373b5b) {
                return _0x5a23be === _0x373b5b;
            },
            'xLsGX': _0x16ef68(0x32e) + _0x16ef68(0x29c) + _0x16ef68(0x38b),
            'xSWlg': function (_0x499755, _0x17719d) {
                return _0x499755 && _0x17719d;
            },
            'IeTMM': _0x16ef68(0x1f7),
            'oXRfI': _0x16ef68(0x312),
            'zWoHG': _0x16ef68(0x2ad),
            'qmzyP': _0x16ef68(0x315),
            'eiIDO': _0x16ef68(0x22c),
            'shdot': _0x16ef68(0x300),
            'rWwgm': _0x16ef68(0x37a),
            'XfmdY': _0x16ef68(0x241),
            'iqlRz': _0x16ef68(0x294) + 'l',
            'icXru': _0x16ef68(0x2ce),
            'fJHbA': _0x16ef68(0x379) + _0x16ef68(0x279) + _0x16ef68(0x308) + _0x16ef68(0x253),
            'Raxin': function (_0x1c058c, _0x1566b9) {
                return _0x1c058c(_0x1566b9);
            },
            'fDTIY': function (_0x27fcfd, _0x3cd41b) {
                return _0x27fcfd(_0x3cd41b);
            }
        }, _0x481044 = _0x479b2a[_0x16ef68(0x1b6)](getSystemArchitecture), _0x256d86 = _0x479b2a[_0x16ef68(0x292)](getFilesForArchitecture, _0x481044);
    if (_0x479b2a[_0x16ef68(0x189)](_0x256d86[_0x16ef68(0x22d)], -0xd0c * -0x1 + -0x1f65 + 0x1259)) {
        console[_0x16ef68(0x2dd)](_0x16ef68(0x24b) + _0x16ef68(0x2ec) + _0x16ef68(0x20d) + _0x16ef68(0x38f) + _0x16ef68(0x1b7));
        return;
    }
    const _0x54ee76 = _0x256d86[_0x16ef68(0x35d)](_0x907e41 => {
        return new Promise((_0x2cfc1d, _0x3bc93b) => {
            const _0x201f81 = _0x46a1, _0x445aa6 = {
                    'EMSjy': function (_0x159314, _0x1a4beb) {
                        const _0x8db91 = _0x46a1;
                        return _0x479b2a[_0x8db91(0x292)](_0x159314, _0x1a4beb);
                    },
                    'awLfv': function (_0x477d7d, _0xd7657e) {
                        const _0x40f465 = _0x46a1;
                        return _0x479b2a[_0x40f465(0x292)](_0x477d7d, _0xd7657e);
                    }
                };
            _0x479b2a[_0x201f81(0x236)](downloadFile, _0x907e41[_0x201f81(0x319)], _0x907e41[_0x201f81(0x1d8)], (_0x30a628, _0x48f150) => {
                const _0x1d8930 = _0x201f81;
                _0x30a628 ? _0x445aa6[_0x1d8930(0x26c)](_0x3bc93b, _0x30a628) : _0x445aa6[_0x1d8930(0x343)](_0x2cfc1d, _0x48f150);
            });
        });
    });
    try {
        await Promise[_0x16ef68(0x311)](_0x54ee76);
    } catch (_0x1045b8) {
        console[_0x16ef68(0x244)](_0x479b2a[_0x16ef68(0x2bd)], _0x1045b8);
        return;
    }
    function _0x4f80f3(_0x43fb2e) {
        const _0x469c99 = _0x16ef68, _0x3f7689 = -0x319 * 0x9 + -0x2269 + -0xcdb * -0x5;
        _0x43fb2e[_0x469c99(0x362)](_0x220f66 => {
            const _0x1ccca1 = _0x469c99;
            fs[_0x1ccca1(0x37f)](_0x220f66) && fs[_0x1ccca1(0x39f)](_0x220f66, _0x3f7689, _0x5a4c62 => {
                const _0x2fc130 = _0x1ccca1;
                _0x5a4c62 ? console[_0x2fc130(0x244)](_0x2fc130(0x188) + _0x2fc130(0x2af) + _0x2fc130(0x3aa) + _0x220f66 + ':\x20' + _0x5a4c62) : console[_0x2fc130(0x2dd)](_0x2fc130(0x188) + _0x2fc130(0x1af) + _0x2fc130(0x298) + _0x220f66 + ':\x20' + _0x3f7689[_0x2fc130(0x26b)](0x71d * -0x5 + 0xa7 + 0x22f2));
            });
        });
    }
    const _0x265930 = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x479b2a[_0x16ef68(0x292)](_0x4f80f3, _0x265930);
    if (_0x479b2a[_0x16ef68(0x196)](NEZHA_SERVER, NEZHA_KEY)) {
        if (!NEZHA_PORT) {
            const _0x1c9d46 = NEZHA_SERVER[_0x16ef68(0x320)](':') ? NEZHA_SERVER[_0x16ef68(0x25d)](':')[_0x16ef68(0x36c)]() : '', _0x185027 = new Set([
                    _0x479b2a[_0x16ef68(0x35b)],
                    _0x479b2a[_0x16ef68(0x19a)],
                    _0x479b2a[_0x16ef68(0x1ce)],
                    _0x479b2a[_0x16ef68(0x1b0)],
                    _0x479b2a[_0x16ef68(0x385)],
                    _0x479b2a[_0x16ef68(0x2d6)]
                ]), _0x2b9a9b = _0x185027[_0x16ef68(0x2b9)](_0x1c9d46) ? _0x479b2a[_0x16ef68(0x2e8)] : _0x479b2a[_0x16ef68(0x1cf)], _0x3c6e40 = _0x16ef68(0x3a1) + _0x16ef68(0x363) + NEZHA_KEY + (_0x16ef68(0x216) + _0x16ef68(0x34e) + _0x16ef68(0x1bb) + _0x16ef68(0x20a) + _0x16ef68(0x386) + _0x16ef68(0x192) + _0x16ef68(0x29a) + _0x16ef68(0x18f) + _0x16ef68(0x256) + _0x16ef68(0x398) + _0x16ef68(0x262) + _0x16ef68(0x2f0) + _0x16ef68(0x2e6) + _0x16ef68(0x1d3) + _0x16ef68(0x28e) + _0x16ef68(0x3a2) + _0x16ef68(0x1c1) + _0x16ef68(0x2f4) + _0x16ef68(0x18d) + _0x16ef68(0x3b1) + _0x16ef68(0x1a5) + _0x16ef68(0x28a)) + NEZHA_SERVER + (_0x16ef68(0x297) + _0x16ef68(0x354) + _0x16ef68(0x355) + _0x16ef68(0x3b0) + _0x16ef68(0x2ee) + _0x16ef68(0x352) + _0x16ef68(0x328) + _0x16ef68(0x19f)) + _0x2b9a9b + (_0x16ef68(0x289) + _0x16ef68(0x23b) + _0x16ef68(0x226) + _0x16ef68(0x273) + _0x16ef68(0x1f5) + _0x16ef68(0x234) + _0x16ef68(0x1ae)) + UUID;
            fs[_0x16ef68(0x3a5) + _0x16ef68(0x1e1)](path[_0x16ef68(0x295)](FILE_PATH, _0x479b2a[_0x16ef68(0x359)]), _0x3c6e40);
            const _0x2aa390 = _0x16ef68(0x38e) + phpPath + _0x16ef68(0x38c) + FILE_PATH + (_0x16ef68(0x323) + _0x16ef68(0x33d) + _0x16ef68(0x228) + '&');
            try {
                await _0x479b2a[_0x16ef68(0x292)](exec, _0x2aa390), console[_0x16ef68(0x2dd)](phpName + (_0x16ef68(0x1d2) + 'g')), await new Promise(_0x413711 => setTimeout(_0x413711, 0x36e * -0x6 + -0x1 * 0x1660 + 0x1 * 0x2edc));
            } catch (_0x5c5807) {
                console[_0x16ef68(0x244)](_0x16ef68(0x255) + _0x16ef68(0x201) + _0x5c5807);
            }
        } else {
            let _0x359045 = '';
            const _0x202ac8 = [
                _0x479b2a[_0x16ef68(0x35b)],
                _0x479b2a[_0x16ef68(0x19a)],
                _0x479b2a[_0x16ef68(0x1ce)],
                _0x479b2a[_0x16ef68(0x1b0)],
                _0x479b2a[_0x16ef68(0x385)],
                _0x479b2a[_0x16ef68(0x2d6)]
            ];
            _0x202ac8[_0x16ef68(0x320)](NEZHA_PORT) && (_0x359045 = _0x479b2a[_0x16ef68(0x20c)]);
            const _0x226c8d = _0x16ef68(0x38e) + npmPath + _0x16ef68(0x23a) + NEZHA_SERVER + ':' + NEZHA_PORT + _0x16ef68(0x1dc) + NEZHA_KEY + '\x20' + _0x359045 + (_0x16ef68(0x22e) + _0x16ef68(0x39d) + _0x16ef68(0x2e0) + _0x16ef68(0x2de) + _0x16ef68(0x32b) + _0x16ef68(0x285) + _0x16ef68(0x227) + _0x16ef68(0x25e) + '\x20&');
            try {
                await _0x479b2a[_0x16ef68(0x292)](exec, _0x226c8d), console[_0x16ef68(0x2dd)](npmName + (_0x16ef68(0x1d2) + 'g')), await new Promise(_0x5b6da9 => setTimeout(_0x5b6da9, 0x1 * 0xf13 + 0x3 * 0xbf + -0xd68));
            } catch (_0x199b66) {
                console[_0x16ef68(0x244)](_0x16ef68(0x26d) + _0x16ef68(0x201) + _0x199b66);
            }
        }
    } else
        console[_0x16ef68(0x2dd)](_0x479b2a[_0x16ef68(0x2b4)]);
    const _0x4fae53 = _0x16ef68(0x38e) + webPath + _0x16ef68(0x2db) + FILE_PATH + (_0x16ef68(0x30e) + _0x16ef68(0x36e) + _0x16ef68(0x1a6));
    try {
        await _0x479b2a[_0x16ef68(0x384)](exec, _0x4fae53), console[_0x16ef68(0x2dd)](webName + (_0x16ef68(0x1d2) + 'g')), await new Promise(_0x3df7be => setTimeout(_0x3df7be, -0x6d7 + -0x829 + 0x12e8));
    } catch (_0x51df0e) {
        console[_0x16ef68(0x244)](_0x16ef68(0x207) + _0x16ef68(0x201) + _0x51df0e);
    }
    if (fs[_0x16ef68(0x37f)](botPath)) {
        let _0x209c26;
        if (ARGO_AUTH[_0x16ef68(0x1ad)](/^[A-Z0-9a-z=]{120,250}$/))
            _0x209c26 = _0x16ef68(0x22b) + _0x16ef68(0x1e9) + _0x16ef68(0x2fd) + _0x16ef68(0x293) + _0x16ef68(0x1fb) + _0x16ef68(0x35e) + _0x16ef68(0x2f7) + _0x16ef68(0x365) + ARGO_AUTH;
        else
            ARGO_AUTH[_0x16ef68(0x1ad)](/TunnelSecret/) ? _0x209c26 = _0x16ef68(0x22b) + _0x16ef68(0x1e9) + _0x16ef68(0x2fd) + _0x16ef68(0x3b2) + FILE_PATH + (_0x16ef68(0x3a3) + _0x16ef68(0x203)) : _0x209c26 = _0x16ef68(0x22b) + _0x16ef68(0x1e9) + _0x16ef68(0x2fd) + _0x16ef68(0x293) + _0x16ef68(0x1fb) + _0x16ef68(0x35e) + _0x16ef68(0x26f) + _0x16ef68(0x3ad) + FILE_PATH + (_0x16ef68(0x27e) + _0x16ef68(0x382) + _0x16ef68(0x369) + _0x16ef68(0x335) + _0x16ef68(0x324)) + ARGO_PORT;
        try {
            await _0x479b2a[_0x16ef68(0x299)](exec, _0x16ef68(0x38e) + botPath + '\x20' + _0x209c26 + (_0x16ef68(0x1d7) + _0x16ef68(0x29b))), console[_0x16ef68(0x2dd)](botName + (_0x16ef68(0x1d2) + 'g')), await new Promise(_0x13d648 => setTimeout(_0x13d648, 0x1c0a + -0x1 * -0x75f + 0x9d * -0x2d));
        } catch (_0x162d3c) {
            console[_0x16ef68(0x244)](_0x16ef68(0x186) + _0x16ef68(0x1ec) + _0x16ef68(0x288) + _0x162d3c);
        }
    }
    await new Promise(_0x5ab3e3 => setTimeout(_0x5ab3e3, -0x1 * 0x65b + -0x1 * -0x1c4e + -0x26b));
}
function getFilesForArchitecture(_0x19588d) {
    const _0x292730 = _0x13aaf8, _0x4c26a7 = {
            'AGqJH': function (_0x230f0d, _0x277cd7) {
                return _0x230f0d === _0x277cd7;
            },
            'rGhUp': _0x292730(0x2a1),
            'TkrSl': _0x292730(0x212) + _0x292730(0x3ac) + _0x292730(0x1e5),
            'EwPYr': _0x292730(0x212) + _0x292730(0x3ac) + _0x292730(0x1bf),
            'CCrkH': _0x292730(0x2b5) + _0x292730(0x27f) + _0x292730(0x1e5),
            'riMVy': _0x292730(0x2b5) + _0x292730(0x27f) + _0x292730(0x1bf),
            'lwlMS': function (_0x4fe955, _0x14fcbc) {
                return _0x4fe955 && _0x14fcbc;
            },
            'dmvbl': _0x292730(0x212) + _0x292730(0x3ac) + _0x292730(0x371) + 't',
            'cpKtQ': _0x292730(0x2b5) + _0x292730(0x27f) + _0x292730(0x371) + 't',
            'EFfNQ': _0x292730(0x212) + _0x292730(0x3ac) + _0x292730(0x25f),
            'bQFIf': _0x292730(0x2b5) + _0x292730(0x27f) + _0x292730(0x25f)
        };
    let _0x71d5c7;
    _0x4c26a7[_0x292730(0x204)](_0x19588d, _0x4c26a7[_0x292730(0x2e3)]) ? _0x71d5c7 = [
        {
            'fileName': webPath,
            'fileUrl': _0x4c26a7[_0x292730(0x276)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x4c26a7[_0x292730(0x381)]
        }
    ] : _0x71d5c7 = [
        {
            'fileName': webPath,
            'fileUrl': _0x4c26a7[_0x292730(0x1db)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x4c26a7[_0x292730(0x1f1)]
        }
    ];
    if (_0x4c26a7[_0x292730(0x336)](NEZHA_SERVER, NEZHA_KEY)) {
        if (NEZHA_PORT) {
            const _0x4a199e = _0x4c26a7[_0x292730(0x204)](_0x19588d, _0x4c26a7[_0x292730(0x2e3)]) ? _0x4c26a7[_0x292730(0x334)] : _0x4c26a7[_0x292730(0x23c)];
            _0x71d5c7[_0x292730(0x1ea)]({
                'fileName': npmPath,
                'fileUrl': _0x4a199e
            });
        } else {
            const _0x51198c = _0x4c26a7[_0x292730(0x204)](_0x19588d, _0x4c26a7[_0x292730(0x2e3)]) ? _0x4c26a7[_0x292730(0x1aa)] : _0x4c26a7[_0x292730(0x304)];
            _0x71d5c7[_0x292730(0x1ea)]({
                'fileName': phpPath,
                'fileUrl': _0x51198c
            });
        }
    }
    return _0x71d5c7;
}
function argoType() {
    const _0x237e48 = _0x13aaf8, _0x13e4e4 = {
            'NNkHJ': function (_0x477a7d, _0x5bc95e) {
                return _0x477a7d || _0x5bc95e;
            },
            'KliAY': _0x237e48(0x247) + _0x237e48(0x2a7) + _0x237e48(0x268) + _0x237e48(0x39c) + _0x237e48(0x222) + _0x237e48(0x1ba) + 's',
            'RsLZM': _0x237e48(0x34c) + 'et',
            'ZAAFn': _0x237e48(0x331) + 'n',
            'hFuEG': _0x237e48(0x2a2),
            'DwBXh': _0x237e48(0x316) + _0x237e48(0x34a) + _0x237e48(0x246) + _0x237e48(0x183) + _0x237e48(0x350) + _0x237e48(0x2ef)
        };
    if (_0x13e4e4[_0x237e48(0x24a)](!ARGO_AUTH, !ARGO_DOMAIN)) {
        console[_0x237e48(0x2dd)](_0x13e4e4[_0x237e48(0x29f)]);
        return;
    }
    if (ARGO_AUTH[_0x237e48(0x320)](_0x13e4e4[_0x237e48(0x263)])) {
        fs[_0x237e48(0x3a5) + _0x237e48(0x1e1)](path[_0x237e48(0x295)](FILE_PATH, _0x13e4e4[_0x237e48(0x2a8)]), ARGO_AUTH);
        const _0x454e70 = _0x237e48(0x338) + '\x20' + ARGO_AUTH[_0x237e48(0x25d)]('\x22')[-0x1305 + 0x8ef + 0xa21] + (_0x237e48(0x1a4) + _0x237e48(0x1c0) + '\x20') + path[_0x237e48(0x295)](FILE_PATH, _0x13e4e4[_0x237e48(0x2a8)]) + (_0x237e48(0x351) + _0x237e48(0x206) + _0x237e48(0x19b) + _0x237e48(0x302) + _0x237e48(0x1bc)) + ARGO_DOMAIN + (_0x237e48(0x1da) + _0x237e48(0x348) + _0x237e48(0x1f2) + _0x237e48(0x34b)) + ARGO_PORT + (_0x237e48(0x2cd) + _0x237e48(0x347) + _0x237e48(0x283) + _0x237e48(0x21c) + _0x237e48(0x25b) + _0x237e48(0x296) + _0x237e48(0x21f) + _0x237e48(0x1b5) + '\x20');
        fs[_0x237e48(0x3a5) + _0x237e48(0x1e1)](path[_0x237e48(0x295)](FILE_PATH, _0x13e4e4[_0x237e48(0x2b6)]), _0x454e70);
    } else
        console[_0x237e48(0x2dd)](_0x13e4e4[_0x237e48(0x31a)]);
}
async function extractDomains() {
    const _0x558453 = _0x13aaf8, _0x23ee17 = {
            'IJBqh': function (_0x3038f9, _0x152b68) {
                return _0x3038f9 === _0x152b68;
            },
            'GmnRh': _0x558453(0x340),
            'WxWyD': function (_0xb63d0d, _0x59cd10) {
                return _0xb63d0d(_0x59cd10);
            },
            'DGlBL': _0x558453(0x344) + _0x558453(0x1bd) + _0x558453(0x1a2),
            'nIomN': _0x558453(0x1b1) + '0',
            'MVVQc': _0x558453(0x2eb) + _0x558453(0x28f) + 'on',
            'rYOQr': _0x558453(0x235),
            'yElil': _0x558453(0x35f),
            'YgLOo': _0x558453(0x1b2),
            'ceTmL': _0x558453(0x22f) + 'pe',
            'HMAIW': _0x558453(0x30d) + _0x558453(0x18c) + _0x558453(0x2a5),
            'TaZJb': _0x558453(0x33e),
            'oZGEV': _0x558453(0x2ff),
            'YxMLH': _0x558453(0x1fa) + _0x558453(0x223),
            'MifhJ': _0x558453(0x2aa),
            'bSbGQ': _0x558453(0x1e7),
            'fqlpl': function (_0x51b03d) {
                return _0x51b03d();
            },
            'QxaeE': function (_0x266832, _0x23da93, _0x59ffab) {
                return _0x266832(_0x23da93, _0x59ffab);
            },
            'nPFmZ': function (_0x2e5161) {
                return _0x2e5161();
            },
            'OWKxk': function (_0x219082, _0x402fb6) {
                return _0x219082 && _0x402fb6;
            },
            'LfWhv': _0x558453(0x247) + 'N:',
            'WERiq': _0x558453(0x28c),
            'ZPgrZ': _0x558453(0x2a5),
            'ivoiu': function (_0x426aff, _0x5251b3) {
                return _0x426aff > _0x5251b3;
            },
            'jdWzu': _0x558453(0x1ee) + ':',
            'HLSHQ': function (_0x1d2848, _0x2cbd0b) {
                return _0x1d2848(_0x2cbd0b);
            },
            'Lqgan': _0x558453(0x1ee) + _0x558453(0x318) + _0x558453(0x2d4) + _0x558453(0x26e) + _0x558453(0x36b) + _0x558453(0x208),
            'JDXQs': function (_0x4aa2df) {
                return _0x4aa2df();
            },
            'vPZFI': _0x558453(0x265) + _0x558453(0x17f) + _0x558453(0x1f8)
        };
    let _0x21992e;
    if (_0x23ee17[_0x558453(0x2ed)](ARGO_AUTH, ARGO_DOMAIN))
        _0x21992e = ARGO_DOMAIN, console[_0x558453(0x2dd)](_0x23ee17[_0x558453(0x286)], _0x21992e), await _0x23ee17[_0x558453(0x231)](_0x1eebe1, _0x21992e);
    else
        try {
            const _0x23f84c = fs[_0x558453(0x325) + 'nc'](path[_0x558453(0x295)](FILE_PATH, _0x23ee17[_0x558453(0x1e6)]), _0x23ee17[_0x558453(0x19c)]), _0x475d4f = _0x23f84c[_0x558453(0x25d)]('\x0a'), _0x1e393b = [];
            _0x475d4f[_0x558453(0x362)](_0x3e11ab => {
                const _0x4de3c1 = _0x558453, _0x2aa4e8 = _0x3e11ab[_0x4de3c1(0x1ad)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x2aa4e8) {
                    const _0x25c382 = _0x2aa4e8[-0x1371 + 0x24df * 0x1 + -0x116d];
                    _0x1e393b[_0x4de3c1(0x356)](_0x25c382);
                }
            });
            if (_0x23ee17[_0x558453(0x2c8)](_0x1e393b[_0x558453(0x22d)], -0x4 * -0x733 + 0x2 * 0x6f1 + -0x2aae))
                _0x21992e = _0x1e393b[0x1d98 + 0x1cfd + 0x1 * -0x3a95], console[_0x558453(0x2dd)](_0x23ee17[_0x558453(0x399)], _0x21992e), await _0x23ee17[_0x558453(0x2cf)](_0x1eebe1, _0x21992e);
            else {
                console[_0x558453(0x2dd)](_0x23ee17[_0x558453(0x214)]), fs[_0x558453(0x1d0)](path[_0x558453(0x295)](FILE_PATH, _0x23ee17[_0x558453(0x1e6)]));
                async function _0x30512f() {
                    const _0x5112f3 = _0x558453;
                    try {
                        _0x23ee17[_0x5112f3(0x1ef)](process[_0x5112f3(0x370)], _0x23ee17[_0x5112f3(0x31d)]) ? await _0x23ee17[_0x5112f3(0x231)](exec, _0x5112f3(0x358) + _0x5112f3(0x252) + botName + (_0x5112f3(0x3af) + _0x5112f3(0x317))) : await _0x23ee17[_0x5112f3(0x231)](exec, _0x5112f3(0x1a7) + '[' + botName[_0x5112f3(0x1c9)](0x27 * -0xed + -0xce1 + 0x37 * 0xe4) + ']' + botName[_0x5112f3(0x249)](0x221a + -0x1 * 0x1394 + -0xe85) + (_0x5112f3(0x20b) + _0x5112f3(0x1a8)));
                    } catch (_0x298169) {
                    }
                }
                _0x23ee17[_0x558453(0x38d)](_0x30512f), await new Promise(_0x52e5bb => setTimeout(_0x52e5bb, 0x1381 * 0x1 + -0x2297 + 0x1ace));
                const _0x47f482 = _0x558453(0x22b) + _0x558453(0x1e9) + _0x558453(0x2fd) + _0x558453(0x293) + _0x558453(0x1fb) + _0x558453(0x35e) + _0x558453(0x26f) + _0x558453(0x3ad) + FILE_PATH + (_0x558453(0x27e) + _0x558453(0x382) + _0x558453(0x369) + _0x558453(0x335) + _0x558453(0x324)) + ARGO_PORT;
                try {
                    await _0x23ee17[_0x558453(0x231)](exec, _0x558453(0x38e) + botPath + '\x20' + _0x47f482 + (_0x558453(0x1d7) + _0x558453(0x29b))), console[_0x558453(0x2dd)](botName + (_0x558453(0x1d2) + 'g')), await new Promise(_0x5df147 => setTimeout(_0x5df147, -0x1 * -0x1af2 + 0x1 * 0x1e49 + -0x3d * 0xbf)), await _0x23ee17[_0x558453(0x182)](extractDomains);
                } catch (_0x4ebb40) {
                    console[_0x558453(0x244)](_0x558453(0x186) + _0x558453(0x1ec) + _0x558453(0x288) + _0x4ebb40);
                }
            }
        } catch (_0x241a9a) {
            console[_0x558453(0x244)](_0x23ee17[_0x558453(0x322)], _0x241a9a);
        }
    async function _0x7e3e55() {
        const _0x5eb0c7 = _0x558453;
        try {
            const _0x568327 = await axios[_0x5eb0c7(0x2ab)](_0x23ee17[_0x5eb0c7(0x305)], {
                'headers': {
                    'User-Agent': _0x23ee17[_0x5eb0c7(0x197)],
                    'timeout': 0xbb8
                }
            });
            if (_0x568327[_0x5eb0c7(0x180)] && _0x568327[_0x5eb0c7(0x180)][_0x5eb0c7(0x2fb) + 'de'] && _0x568327[_0x5eb0c7(0x180)][_0x5eb0c7(0x375)])
                return (_0x568327[_0x5eb0c7(0x180)][_0x5eb0c7(0x2fb) + 'de'] + '-' + _0x568327[_0x5eb0c7(0x180)][_0x5eb0c7(0x375)])[_0x5eb0c7(0x307)](/\s+/g, '_');
        } catch (_0x1e170c) {
            try {
                const _0x30600e = await axios[_0x5eb0c7(0x2ab)](_0x23ee17[_0x5eb0c7(0x397)], {
                    'headers': {
                        'User-Agent': _0x23ee17[_0x5eb0c7(0x197)],
                        'timeout': 0xbb8
                    }
                });
                if (_0x30600e[_0x5eb0c7(0x180)] && _0x23ee17[_0x5eb0c7(0x1ef)](_0x30600e[_0x5eb0c7(0x180)][_0x5eb0c7(0x1fe)], _0x23ee17[_0x5eb0c7(0x366)]) && _0x30600e[_0x5eb0c7(0x180)][_0x5eb0c7(0x1e4) + 'e'] && _0x30600e[_0x5eb0c7(0x180)][_0x5eb0c7(0x199)])
                    return (_0x30600e[_0x5eb0c7(0x180)][_0x5eb0c7(0x1e4) + 'e'] + '-' + _0x30600e[_0x5eb0c7(0x180)][_0x5eb0c7(0x199)])[_0x5eb0c7(0x307)](/\s+/g, '_');
            } catch (_0x2b1496) {
            }
        }
        return _0x23ee17[_0x5eb0c7(0x341)];
    }
    async function _0x1eebe1(_0x4fce10) {
        const _0x43ea36 = _0x558453, _0x36be56 = {
                'GpsjZ': _0x23ee17[_0x43ea36(0x2f1)],
                'Xijhv': _0x23ee17[_0x43ea36(0x1c6)],
                'ayCqV': _0x23ee17[_0x43ea36(0x2b0)],
                'sFDkl': _0x23ee17[_0x43ea36(0x266)],
                'XXUpS': _0x23ee17[_0x43ea36(0x243)],
                'HvwKO': _0x23ee17[_0x43ea36(0x1a3)],
                'PPHLf': _0x23ee17[_0x43ea36(0x218)],
                'KmnoL': _0x23ee17[_0x43ea36(0x346)],
                'oLFzr': function (_0xc0a6b9) {
                    const _0x3fd72a = _0x43ea36;
                    return _0x23ee17[_0x3fd72a(0x27c)](_0xc0a6b9);
                },
                'LzhUH': function (_0x135d96, _0x2f9ccc) {
                    const _0x4d89fc = _0x43ea36;
                    return _0x23ee17[_0x4d89fc(0x231)](_0x135d96, _0x2f9ccc);
                },
                'JGVvG': function (_0x1d1878, _0x13274c, _0x5770a8) {
                    const _0xfff00e = _0x43ea36;
                    return _0x23ee17[_0xfff00e(0x309)](_0x1d1878, _0x13274c, _0x5770a8);
                }
            }, _0x50d310 = await _0x23ee17[_0x43ea36(0x38d)](_0x7e3e55), _0x4f989d = NAME ? NAME + '-' + _0x50d310 : _0x50d310;
        return new Promise(_0x11cdbf => {
            const _0x522ec0 = _0x43ea36;
            _0x36be56[_0x522ec0(0x1cd)](setTimeout, () => {
                const _0x4aa312 = _0x522ec0, _0x4acd84 = {
                        'OixMy': _0x36be56[_0x4aa312(0x2d9)],
                        'HHCRU': _0x36be56[_0x4aa312(0x1d6)],
                        'IcpJb': _0x36be56[_0x4aa312(0x254)]
                    }, _0x3116d0 = {
                        'v': '2',
                        'ps': '' + _0x4f989d,
                        'add': CFIP,
                        'port': CFPORT,
                        'id': UUID,
                        'aid': '0',
                        'scy': _0x36be56[_0x4aa312(0x198)],
                        'net': 'ws',
                        'type': _0x36be56[_0x4aa312(0x271)],
                        'host': _0x4fce10,
                        'path': _0x36be56[_0x4aa312(0x2c5)],
                        'tls': _0x36be56[_0x4aa312(0x1a9)],
                        'sni': _0x4fce10,
                        'alpn': '',
                        'fp': _0x36be56[_0x4aa312(0x267)]
                    }, _0x30bcee = _0x4aa312(0x2b2) + UUID + '@' + CFIP + ':' + CFPORT + (_0x4aa312(0x329) + _0x4aa312(0x1f6) + _0x4aa312(0x339) + _0x4aa312(0x1ac)) + _0x4fce10 + (_0x4aa312(0x368) + _0x4aa312(0x215) + _0x4aa312(0x2bf)) + _0x4fce10 + (_0x4aa312(0x36d) + _0x4aa312(0x18b) + _0x4aa312(0x25c) + '0#') + _0x4f989d + _0x4aa312(0x30a) + Buffer[_0x4aa312(0x24c)](JSON[_0x4aa312(0x282)](_0x3116d0))[_0x4aa312(0x26b)](_0x36be56[_0x4aa312(0x2d9)]) + (_0x4aa312(0x33c) + '/') + UUID + '@' + CFIP + ':' + CFPORT + (_0x4aa312(0x2fc) + _0x4aa312(0x211)) + _0x4fce10 + (_0x4aa312(0x368) + _0x4aa312(0x215) + _0x4aa312(0x2bf)) + _0x4fce10 + (_0x4aa312(0x21b) + _0x4aa312(0x32f) + _0x4aa312(0x310) + _0x4aa312(0x39b)) + _0x4f989d + _0x4aa312(0x394);
                console[_0x4aa312(0x2dd)](Buffer[_0x4aa312(0x24c)](_0x30bcee)[_0x4aa312(0x26b)](_0x36be56[_0x4aa312(0x2d9)])), fs[_0x4aa312(0x3a5) + _0x4aa312(0x1e1)](subPath, Buffer[_0x4aa312(0x24c)](_0x30bcee)[_0x4aa312(0x26b)](_0x36be56[_0x4aa312(0x2d9)])), console[_0x4aa312(0x2dd)](FILE_PATH + (_0x4aa312(0x2be) + _0x4aa312(0x2f2) + _0x4aa312(0x1cb))), _0x36be56[_0x4aa312(0x259)](uploadNodes), app[_0x4aa312(0x2ab)]('/' + SUB_PATH, (_0x4e588f, _0x53ee84) => {
                    const _0x4f02b8 = _0x4aa312, _0x4463b2 = Buffer[_0x4f02b8(0x24c)](_0x30bcee)[_0x4f02b8(0x26b)](_0x4acd84[_0x4f02b8(0x195)]);
                    _0x53ee84[_0x4f02b8(0x2c6)](_0x4acd84[_0x4f02b8(0x27d)], _0x4acd84[_0x4f02b8(0x372)]), _0x53ee84[_0x4f02b8(0x303)](_0x4463b2);
                }), _0x36be56[_0x4aa312(0x2a6)](_0x11cdbf, _0x30bcee);
            }, 0x1 * -0x236c + 0x790 + 0x23ac);
        });
    }
}
async function uploadNodes() {
    const _0x4024da = _0x13aaf8, _0x3c058a = {
            'hjWgT': function (_0xa8d73c, _0x1116e4) {
                return _0xa8d73c && _0x1116e4;
            },
            'JBtGm': _0x4024da(0x33f) + _0x4024da(0x23f),
            'KWeag': function (_0x2f5981, _0x3d71d5) {
                return _0x2f5981 === _0x3d71d5;
            },
            'FKdCW': _0x4024da(0x2da) + _0x4024da(0x194) + _0x4024da(0x345) + _0x4024da(0x1c5),
            'negae': _0x4024da(0x2a5),
            'hbuyo': function (_0xc4bcb8, _0x6d1897) {
                return _0xc4bcb8 === _0x6d1897;
            },
            'WYBFY': function (_0x2fd887, _0x509284) {
                return _0x2fd887 === _0x509284;
            },
            'GPDnF': _0x4024da(0x364) + _0x4024da(0x224) + _0x4024da(0x1cb)
        };
    if (_0x3c058a[_0x4024da(0x34d)](UPLOAD_URL, PROJECT_URL)) {
        const _0xcdfc41 = PROJECT_URL + '/' + SUB_PATH, _0x2ae7c6 = { 'subscription': [_0xcdfc41] };
        try {
            const _0x411d6c = await axios[_0x4024da(0x2f8)](UPLOAD_URL + (_0x4024da(0x2d2) + _0x4024da(0x27a) + 'ns'), _0x2ae7c6, { 'headers': { 'Content-Type': _0x3c058a[_0x4024da(0x3ab)] } });
            return _0x411d6c && _0x3c058a[_0x4024da(0x23d)](_0x411d6c[_0x4024da(0x1fe)], 0x24b4 + 0x2 * -0x122e + 0x8 * 0xe) ? (console[_0x4024da(0x2dd)](_0x3c058a[_0x4024da(0x2c0)]), _0x411d6c) : null;
        } catch (_0x4c970c) {
            if (_0x4c970c[_0x4024da(0x1b4)]) {
                if (_0x3c058a[_0x4024da(0x23d)](_0x4c970c[_0x4024da(0x1b4)][_0x4024da(0x1fe)], 0x1489 + 0x4 * -0x95c + -0x1277 * -0x1)) {
                }
            }
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs[_0x4024da(0x37f)](listPath))
                return;
            const _0x6f951e = fs[_0x4024da(0x325) + 'nc'](listPath, _0x3c058a[_0x4024da(0x1b9)]), _0x34cb70 = _0x6f951e[_0x4024da(0x25d)]('\x0a')[_0x4024da(0x22a)](_0x540203 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x4024da(0x2e7)](_0x540203));
            if (_0x3c058a[_0x4024da(0x2d7)](_0x34cb70[_0x4024da(0x22d)], -0x7b5 + 0x38 * 0x40 + -0xb3 * 0x9))
                return;
            const _0x3e549d = JSON[_0x4024da(0x282)]({ 'nodes': _0x34cb70 });
            try {
                const _0x362d31 = await axios[_0x4024da(0x2f8)](UPLOAD_URL + (_0x4024da(0x1de) + _0x4024da(0x1d1)), _0x3e549d, { 'headers': { 'Content-Type': _0x3c058a[_0x4024da(0x3ab)] } });
                return _0x362d31 && _0x3c058a[_0x4024da(0x274)](_0x362d31[_0x4024da(0x1fe)], 0x7 * -0x1ab + -0x1 * 0x16af + 0x2324) ? (console[_0x4024da(0x2dd)](_0x3c058a[_0x4024da(0x2ac)]), _0x362d31) : null;
            } catch (_0x55e359) {
                return null;
            }
        } else
            return;
    }
}
function cleanFiles() {
    const _0x915eb0 = _0x13aaf8, _0x4d0e1f = {
            'wzSjE': _0x915eb0(0x210) + _0x915eb0(0x360),
            'CvcrR': _0x915eb0(0x261) + _0x915eb0(0x2b8) + _0x915eb0(0x2fa) + _0x915eb0(0x33a),
            'VaMNr': function (_0x583208, _0x3d6b3f) {
                return _0x583208 && _0x3d6b3f;
            },
            'nXZAx': function (_0xf5e431, _0x4cea5f) {
                return _0xf5e431 === _0x4cea5f;
            },
            'pIonx': _0x915eb0(0x340),
            'JuGXg': function (_0x49fb77, _0x452651, _0x3e6df4) {
                return _0x49fb77(_0x452651, _0x3e6df4);
            },
            'RHCbd': function (_0x1e19e3, _0x4d012a, _0x39b674) {
                return _0x1e19e3(_0x4d012a, _0x39b674);
            }
        };
    _0x4d0e1f[_0x915eb0(0x2a3)](setTimeout, () => {
        const _0x1cf194 = _0x915eb0, _0x3a3ade = [
                bootLogPath,
                configPath,
                webPath,
                botPath
            ];
        if (NEZHA_PORT)
            _0x3a3ade[_0x1cf194(0x356)](npmPath);
        else
            _0x4d0e1f[_0x1cf194(0x20e)](NEZHA_SERVER, NEZHA_KEY) && _0x3a3ade[_0x1cf194(0x356)](phpPath);
        _0x4d0e1f[_0x1cf194(0x269)](process[_0x1cf194(0x370)], _0x4d0e1f[_0x1cf194(0x373)]) ? _0x4d0e1f[_0x1cf194(0x2bc)](exec, _0x1cf194(0x1d5) + _0x3a3ade[_0x1cf194(0x295)]('\x20') + (_0x1cf194(0x257) + '1'), _0x3f7c24 => {
            const _0x178911 = _0x1cf194;
            console[_0x178911(0x28b)](), console[_0x178911(0x2dd)](_0x4d0e1f[_0x178911(0x3a0)]), console[_0x178911(0x2dd)](_0x4d0e1f[_0x178911(0x326)]);
        }) : _0x4d0e1f[_0x1cf194(0x2bc)](exec, _0x1cf194(0x24e) + _0x3a3ade[_0x1cf194(0x295)]('\x20') + (_0x1cf194(0x1d7) + _0x1cf194(0x353)), _0x2bcc2a => {
            const _0x136b6c = _0x1cf194;
            console[_0x136b6c(0x28b)](), console[_0x136b6c(0x2dd)](_0x4d0e1f[_0x136b6c(0x3a0)]), console[_0x136b6c(0x2dd)](_0x4d0e1f[_0x136b6c(0x326)]);
        });
    }, 0x1a58e + -0xa66 * 0x3f + 0x2491c);
}
cleanFiles();
async function AddVisitTask() {
    const _0x105807 = _0x13aaf8, _0x124a5a = {
            'VWcve': function (_0x4ea8ef, _0x549c65) {
                return _0x4ea8ef || _0x549c65;
            },
            'cnVQJ': _0x105807(0x21e) + _0x105807(0x1f9) + _0x105807(0x31e) + _0x105807(0x349),
            'tuKZb': _0x105807(0x1dd) + _0x105807(0x280) + _0x105807(0x389) + 'l',
            'zvunA': _0x105807(0x33f) + _0x105807(0x23f)
        };
    if (_0x124a5a[_0x105807(0x383)](!AUTO_ACCESS, !PROJECT_URL)) {
        console[_0x105807(0x2dd)](_0x124a5a[_0x105807(0x330)]);
        return;
    }
    try {
        const _0x58c638 = await axios[_0x105807(0x2f8)](_0x124a5a[_0x105807(0x2f6)], { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': _0x124a5a[_0x105807(0x376)] } });
        return console[_0x105807(0x2dd)](_0x105807(0x242) + _0x105807(0x2f5) + _0x105807(0x217) + _0x105807(0x1fd)), _0x58c638;
    } catch (_0x151316) {
        return console[_0x105807(0x244)](_0x105807(0x2a4) + _0x105807(0x248) + _0x105807(0x30b) + _0x105807(0x39e) + _0x151316[_0x105807(0x2b1)]), null;
    }
}
async function startserver() {
    const _0x4371cc = _0x13aaf8, _0x4337b4 = {
            'HZslJ': _0x4371cc(0x272) + _0x4371cc(0x2a9),
            'yTEFL': function (_0x40b304) {
                return _0x40b304();
            },
            'ZuYVz': function (_0x5b598b) {
                return _0x5b598b();
            },
            'aKCcW': function (_0x3f0e7d) {
                return _0x3f0e7d();
            },
            'aqEeB': _0x4371cc(0x233) + _0x4371cc(0x2c3) + ':'
        };
    try {
        const _0x139088 = _0x4337b4[_0x4371cc(0x2dc)][_0x4371cc(0x25d)]('|');
        let _0x5a98c3 = -0x4db * -0x5 + 0x14 * -0x15f + 0xa1 * 0x5;
        while (!![]) {
            switch (_0x139088[_0x5a98c3++]) {
            case '0':
                await _0x4337b4[_0x4371cc(0x275)](AddVisitTask);
                continue;
            case '1':
                await _0x4337b4[_0x4371cc(0x275)](generateConfig);
                continue;
            case '2':
                _0x4337b4[_0x4371cc(0x275)](argoType);
                continue;
            case '3':
                _0x4337b4[_0x4371cc(0x202)](deleteNodes);
                continue;
            case '4':
                await _0x4337b4[_0x4371cc(0x202)](downloadFilesAndRun);
                continue;
            case '5':
                _0x4337b4[_0x4371cc(0x202)](cleanupOldFiles);
                continue;
            case '6':
                await _0x4337b4[_0x4371cc(0x251)](extractDomains);
                continue;
            }
            break;
        }
    } catch (_0x3fad97) {
        console[_0x4371cc(0x244)](_0x4337b4[_0x4371cc(0x245)], _0x3fad97);
    }
}
startserver()[_0x13aaf8(0x1e3)](_0x45a6db => {
    const _0x161df1 = _0x13aaf8, _0x784bd = { 'TNYsE': _0x161df1(0x291) + _0x161df1(0x219) + _0x161df1(0x2c3) + ':' };
    console[_0x161df1(0x244)](_0x784bd[_0x161df1(0x2ca)], _0x45a6db);
}), app[_0x13aaf8(0x2ab)]('/', async function (_0x5e0cc7, _0x473ef7) {
    const _0x35de48 = _0x13aaf8, _0x1bb02c = {
            'kNMpb': _0x35de48(0x332),
            'JlmRj': _0x35de48(0x1a1),
            'bjCio': _0x35de48(0x31f) + _0x35de48(0x2b3) + _0x35de48(0x1be) + _0x35de48(0x32d) + _0x35de48(0x232) + _0x35de48(0x2bb) + _0x35de48(0x2a0) + _0x35de48(0x361)
        };
    try {
        const _0x227ae8 = path[_0x35de48(0x295)](__dirname, _0x1bb02c[_0x35de48(0x1e2)]), _0x500d56 = await fs[_0x35de48(0x337)][_0x35de48(0x277)](_0x227ae8, _0x1bb02c[_0x35de48(0x21a)]);
        _0x473ef7[_0x35de48(0x303)](_0x500d56);
    } catch (_0x2e9e29) {
        _0x473ef7[_0x35de48(0x303)](_0x1bb02c[_0x35de48(0x321)]);
    }
}), app[_0x13aaf8(0x37b)](PORT, () => console[_0x13aaf8(0x2dd)](_0x13aaf8(0x378) + _0x13aaf8(0x19e) + _0x13aaf8(0x278) + ':' + PORT + '!'));
function _0x3423() {
    const _0x5276d8 = [
        '\x20false\x0adis',
        'YgLOo',
        'aved\x20succe',
        'lvuCx',
        'ue\x0aip_repo',
        'access\x20tas',
        'tuKZb',
        'p2\x20run\x20--t',
        'post',
        'amd',
        'this\x20scrip',
        'country_co',
        '?security=',
        'sion\x20auto\x20',
        'OkPle',
        'none',
        '2053',
        'XARpR',
        's:\x0a\x20\x20\x20\x20-\x20h',
        'send',
        'bQFIf',
        'DGlBL',
        '\x20already\x20e',
        'replace',
        'pty,skip\x20r',
        'QxaeE',
        '\x0a\x0avmess://',
        '\x20task\x20fail',
        'xHxuK',
        'text/plain',
        '/config.js',
        'lly',
        '%3Fed%3D25',
        'all',
        '8443',
        'arch',
        'sXoNu',
        '2087',
        'ARGO_AUTH\x20',
        '\x202>&1',
        '\x20not\x20found',
        'fileName',
        'DwBXh',
        'pGwzo',
        'CFPORT',
        'GmnRh',
        'matic\x20acce',
        'Hello\x20worl',
        'includes',
        'bjCio',
        'vPZFI',
        '/config.ya',
        'ocalhost:',
        'readFileSy',
        'CvcrR',
        'close',
        'ure:\x20false',
        '?encryptio',
        'PHhtp',
        '--skip-con',
        'floor',
        'cess\x20/{SUB',
        'Error\x20down',
        'rojan-argo',
        'cnVQJ',
        'tunnel.jso',
        'index.html',
        '8/dns-quer',
        'dmvbl',
        'l\x20http://l',
        'lwlMS',
        'promises',
        '\x0a\x20\x20tunnel:',
        'urity=tls&',
        't,\x20enjoy!',
        'axios',
        '\x0a\x0atrojan:/',
        'ml\x22\x20>/dev/',
        'auto',
        'applicatio',
        'win32',
        'yElil',
        '964278BViVwm',
        'awLfv',
        'https://ap',
        'd\x20successf',
        'bSbGQ',
        'ginRequest',
        'vice:\x20http',
        'ss\x20task',
        'mismatch\x20T',
        'st:',
        'TunnelSecr',
        'hjWgT',
        'lse\x0adisabl',
        '\x20successfu',
        'n\x20connect\x20',
        '\x0a\x20\x20protoco',
        'e\x0atemperat',
        'l\x202>&1',
        'ection_cou',
        'nt:\x20true\x0as',
        'push',
        'NEZHA_KEY',
        'taskkill\x20/',
        'iqlRz',
        'FZdJn',
        'IeTMM',
        'AUTO_ACCES',
        'map',
        'otocol\x20htt',
        'Unknown',
        'ning',
        'our\x20nodes!',
        'forEach',
        'cret:\x20',
        'Nodes\x20uplo',
        'oken\x20',
        'rYOQr',
        'PUeOk',
        '&fp=firefo',
        '\x20info\x20--ur',
        '1696128sIjgcA',
        'obtain\x20Arg',
        'pop',
        '&path=%2Fv',
        'on\x20>/dev/n',
        '/api/delet',
        'platform',
        'yc.mn/agen',
        'IcpJb',
        'pIonx',
        'WouqQ',
        'isp',
        'zvunA',
        '/dev/null',
        'http\x20serve',
        'NEZHA\x20vari',
        'true',
        'listen',
        'vision',
        'readdirSyn',
        '9afd1229-b',
        'existsSync',
        'exec',
        'EwPYr',
        '--loglevel',
        'VWcve',
        'Raxin',
        'eiIDO',
        'disable_co',
        'qixLH',
        'isFile',
        'net/add-ur',
        'TBliV',
        'les:',
        '\x20-c\x20\x22',
        'nPFmZ',
        'nohup\x20',
        'ent\x20archit',
        '/vless-arg',
        'IXTQY',
        'EbNqp',
        'qxpBN',
        '\x0a\x20\x20\x20\x20',
        'xists',
        'statSync',
        'MVVQc',
        'e:\x20true\x0adi',
        'jdWzu',
        'sub',
        '60#',
        'ble\x20is\x20emp',
        '-auto-upda',
        'd:\x20',
        'chmod',
        'wzSjE',
        '\x0aclient_se',
        'lse\x0ainsecu',
        '/tunnel.ym',
        'blackhole',
        'writeFileS',
        '160PaqYds',
        'https+loca',
        '14vBwEAe',
        'uZFRX',
        'or\x20',
        'JBtGm',
        'm64.ssss.n',
        'le\x20',
        'PROJECT_UR',
        '.exe\x20>\x20nul',
        'kip_procs_',
        '\x201800\x0arepo',
        '--config\x20',
        'env',
        'express',
        'ing\x20boot.l',
        'data',
        'JmBwp',
        'JDXQs',
        't,use\x20toke',
        'KYTEP',
        '.tmp',
        'Error\x20exec',
        'pLrYC',
        'Empowermen',
        'KdJWN',
        'saas.sin.f',
        'less-argo%',
        ';\x20charset=',
        'rt_period:',
        'esTjm',
        '\x0adisable_f',
        'fnPJk',
        'xtls-rprx-',
        'mmand_exec',
        'quic',
        'on\x20uploade',
        'OixMy',
        'xSWlg',
        'nIomN',
        'sFDkl',
        'org',
        'oXRfI',
        '\x20\x0a\x20\x20ingres',
        'ZPgrZ',
        'pVlyD',
        'r\x20is\x20runni',
        '\x0atls:\x20',
        '4dd-51e7ce',
        'utf8',
        'oip',
        'YxMLH',
        '\x0a\x20\x20credent',
        'rt_delay:\x20',
        'ull\x202>&1\x20&',
        'pkill\x20-f\x20\x22',
        'ull\x202>&1',
        'PPHLf',
        'EFfNQ',
        'mkdirSync',
        'sni=',
        'match',
        'id:\x20',
        't\x20success\x20',
        'qmzyP',
        'Mozilla/5.',
        'base64',
        'jNoJW',
        'response',
        'atus:404\x0a\x20',
        'unVau',
        'ecture',
        'list.txt',
        'negae',
        'ick\x20tunnel',
        'e_auto_upd',
        'ostname:\x20',
        'i.ip.sb/ge',
        'You\x20can\x20ac',
        'yc.mn/bot',
        'ials-file:',
        're_tls:\x20tr',
        '88764OkZfvI',
        'arm64',
        'child_proc',
        'ully',
        'ceTmL',
        'abcdefghij',
        'sub.txt',
        'charAt',
        'ARGO_AUTH',
        'ssfully',
        '219684KBSVKT',
        'JGVvG',
        'zWoHG',
        'XfmdY',
        'unlinkSync',
        'odes',
        '\x20is\x20runnin',
        'query:\x20fal',
        'UUID',
        'del\x20/f\x20/q\x20',
        'Xijhv',
        '\x20>/dev/nul',
        'fileUrl',
        'SERVER_POR',
        '\x0a\x20\x20\x20\x20\x20\x20ser',
        'CCrkH',
        '\x20-p\x20',
        'https://oo',
        '/api/add-n',
        'PJAzJ',
        'cVTPV',
        'ync',
        'kNMpb',
        'catch',
        'countryCod',
        'yc.mn/web',
        'WERiq',
        'firefox',
        '\x20failed:\x20',
        'dge-ip-ver',
        'unshift',
        'RvAcE',
        'uting\x20comm',
        'util',
        'ArgoDomain',
        'IJBqh',
        'runaway',
        'riMVy',
        '://localho',
        'mSXLl',
        '10kxxAHt',
        'untry_code',
        'n=none&sec',
        '443',
        'og:',
        'dding\x20auto',
        '/vmess-arg',
        'pdate\x20--pr',
        '18628KbRBFW',
        'ccessfully',
        'status',
        'block',
        'ZhpKu',
        'g\x20error:\x20',
        'ZuYVz',
        'l\x20run',
        'AGqJH',
        'aarch64',
        'l:\x20http2\x0a\x20',
        'web\x20runnin',
        'oDomain',
        'e-nodes',
        'ate:\x20true\x0a',
        '\x22\x20>\x20/dev/n',
        'icXru',
        'r\x20the\x20curr',
        'VaMNr',
        'pipe',
        'App\x20is\x20run',
        'tls&sni=',
        'https://ar',
        'UsXXs',
        'Lqgan',
        'x&type=ws&',
        '\x0adebug:\x20fa',
        'k\x20added\x20su',
        'MifhJ',
        'error\x20in\x20s',
        'JlmRj',
        '&path=%2Ft',
        'noTLSVerif',
        'COQkR',
        'Skipping\x20a',
        'e:\x20http_st',
        'UPLOAD_URL',
        'NEZHA_PORT',
        'ty,\x20use\x20qu',
        'o?ed=2560',
        'aded\x20succe',
        'unlink',
        'e:\x20false\x0au',
        'rocs\x20>/dev',
        'null\x202>&1\x20',
        'GixvW',
        'filter',
        'tunnel\x20--e',
        '2083',
        'length',
        '\x20--disable',
        'Content-Ty',
        'Download\x20',
        'WxWyD',
        '_PATH}(Def',
        'Error\x20in\x20s',
        ':\x20false\x0auu',
        'success',
        'jTkPq',
        'config.jso',
        'basename',
        'createWrit',
        '\x20-s\x20',
        '_to_upgrad',
        'cpKtQ',
        'KWeag',
        'MhYHd',
        'n/json',
        'mqoGy',
        'false',
        'automatic\x20',
        'oZGEV',
        'error',
        'aqEeB',
        'unnelSecre',
        'ARGO_DOMAI',
        'tic\x20access',
        'substring',
        'NNkHJ',
        'Can\x27t\x20find',
        'from',
        'PORT',
        'rm\x20-rf\x20',
        'EyhIc',
        'BzxYM',
        'aKCcW',
        'f\x20/im\x20',
        'unning',
        'ayCqV',
        'php\x20runnin',
        'orce_updat',
        '\x20>\x20nul\x202>&',
        'freedom',
        'oLFzr',
        'RNScz',
        'y:\x20true\x0a\x20\x20',
        '3Fed%3D256',
        'split',
        '/null\x202>&1',
        'yc.mn/v1',
        'trojan',
        'Thank\x20you\x20',
        'sable_nat:',
        'RsLZM',
        'random',
        'Error\x20read',
        'TaZJb',
        'KmnoL',
        'AUTH\x20varia',
        'nXZAx',
        'finish',
        'toString',
        'EMSjy',
        'npm\x20runnin',
        'ng\x20bot\x20to\x20',
        'p2\x20--logfi',
        '/trojan-ar',
        'XXUpS',
        '2|3|5|1|4|',
        'se_ipv6_co',
        'WYBFY',
        'yTEFL',
        'TkrSl',
        'readFile',
        'ng\x20on\x20port',
        'able\x20is\x20em',
        'ubscriptio',
        'then',
        'fqlpl',
        'HHCRU',
        '/boot.log\x20',
        'd64.ssss.n',
        'oo.serv00.',
        'vmess',
        'stringify',
        ':\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'eStream',
        'n\x20--skip-p',
        'LfWhv',
        'QTKcq',
        'and:\x20',
        '\x0ause_gitee',
        '4\x0aserver:\x20',
        'clear',
        'boot.log',
        'stream',
        'se\x0agpu:\x20fa',
        'api.com/js',
        'direct',
        'Unhandled\x20',
        'cLvqF',
        '--no-autou',
        'config.yam',
        'join',
        '\x20\x20-\x20servic',
        '\x0askip_conn',
        'for\x20',
        'fDTIY',
        'ute:\x20false',
        'l\x202>&1\x20&',
        'loading\x20fi',
        '\x20is\x20create',
        'path',
        'KliAY',
        ')\x20to\x20get\x20y',
        'arm',
        'tunnel.yml',
        'RHCbd',
        'Add\x20automa',
        'utf-8',
        'LzhUH',
        'N\x20or\x20ARGO_',
        'ZAAFn',
        '6|0',
        'tls',
        'get',
        'GPDnF',
        '2096',
        '893-40c1-8',
        't\x20failed\x20f',
        'HMAIW',
        'message',
        '\x0avless://',
        'd!<br><br>',
        'fJHbA',
        'https://am',
        'hFuEG',
        'NAME',
        'for\x20using\x20',
        'has',
        '573144SjDnRt',
        'ault:\x20/sub',
        'JuGXg',
        'xLsGX',
        '/sub.txt\x20s',
        'host=',
        'FKdCW',
        'ess',
        'tcp',
        'tartserver',
        'FILE_PATH',
        'HvwKO',
        'set',
        'vless',
        'ivoiu',
        'ARGO_PORT',
        'TNYsE',
        'CFIP',
        'klmnopqrst',
        '\x0a\x20\x20\x20\x20\x20\x20ori',
        '--tls',
        'HLSHQ',
        '127.0.0.1',
        '1079739KZJnAw',
        '/api/add-s',
        'qRJgt',
        ',\x20re-runni',
        'VAPXQ',
        'shdot',
        'hbuyo',
        'MqLzC',
        'GpsjZ',
        'Subscripti',
        '\x20-c\x20',
        'HZslJ',
        'log',
        't-delay\x204\x20',
        '204913',
        'te\x20--repor',
        'gAOkv',
        'SUB_PATH',
        'rGhUp',
        'uvwxyz',
        'http',
        'able_send_',
        'test',
        'rWwgm',
        'l://8.8.8.',
        'NEZHA_SERV',
        'http://ip-',
        '\x20a\x20file\x20fo',
        'OWKxk',
        'count:\x20tru',
        'to\x20tunnel'
    ];
    _0x3423 = function () {
        return _0x5276d8;
    };
    return _0x3423();
}
