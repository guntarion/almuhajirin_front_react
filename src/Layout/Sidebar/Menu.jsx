export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      
      { path: `${process.env.PUBLIC_URL}/home`, icon: "home", title: "Beranda", type: "link" },
      {
        title: 'Masjid Al Muhajirin',
        badge2: true,
        icon: 'support-tickets',
        type: 'sub',
        children: [
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/masjid/input-muhajirin-kids`,
            title: 'Aktivitas M-Kids',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/masjid/rekap-harian-muhajirin-kids`,
            title: 'Rekap Harian',
            type: 'link',
          },
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/masjid/rekap-akumulatif-muhajirin-kids`,
            title: 'Rekap Akumulatif',
            type: 'link',
          },
        ],
      },
      {
        title: 'Support Ticket',
        icon: 'support-tickets',
        type: 'sub',
        children: [
          {
            active: false,
            path: `http://support.pixelstrap.com/help-center`,
            title: 'Rise Ticket',
            type: 'link',
          },
        ],
      },
    ],
  },
];
