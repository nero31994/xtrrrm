const channels = [
    {
        name: "TV5",
        logo: "https://i.imgur.com/jsCBRq0.png",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "2615129ef2c846a9bbd43a641c7303ef": "07c7f996b1734ea288641a68e1cfdc4d"
                }
            }
        }
    },
    {
        name: "ONE SPORTS",
        logo: "https://i.imgur.com/btiNwYt.png",
        url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
                }
            }
        }
    },
    {
        name: "RPTV",
        logo: "https://i.imgur.com/IDCHfXm.png",
        url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
                }
            }
        }
    },
    {
        name: "SARI-SARI",
        logo: "https://i.imgur.com/kKuO7LD.png",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
                }
            }
        }
    },
    {
        name: "BUKO CH",
        logo: "https://i.imgur.com/Du6LQCi.png",
        url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
                }
            }
        }
    },
    {
        name: "ONE NEWS",
        logo: "https://i.imgur.com/bmP06bk.png",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "d39eb201ae494a0b98583df4d110e8dd": "6797066880d344422abd3f5eda41f45f"
                }
            }
        }
    },
    {
        name: "ONE PH",
        logo: "https://i.imgur.com/9dMuFE1.png",
        url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "92834ab4a7e1499b90886c5d49220e46": "a7108d9a6cfcc1b7939eb111daf09ab3"
                }
            }
        }
    },
    {
        name: "TRUE FM TV",
        logo: "https://i.imgur.com/U8L0Liq.png",
        url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "0559c95496d44fadb94105b9176c3579": "40d8bb2a46ffd03540e0c6210ece57ce"
                }
            }
        }
    },
    {
        name: "MEDIA PILIPINAS TV",
        logo: "https://i.imgur.com/BMCnoRn.png",
        url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "6aab8f40536f4ea98e7c97b8f3aa7d4e": "139aa5a55ade471faaddacc4f4de8807"
                }
            }
        }
    },
    {
        name: "PEOPLE'S TELEVISION",
        logo: "https://i.imgur.com/ycPz1Uc.png",
        url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
        drm: {
            widevine: { url: "https://your-widevine-license-server.com" },
            playready: { url: "https://your-playready-license-server.com" },
            clearkey: {
                keys: {
                    "71a130a851b9484bb47141c8966fb4a3": "ad1f003b4f0b31b75ea4593844435600"
                }
            }
        }
    }
];
