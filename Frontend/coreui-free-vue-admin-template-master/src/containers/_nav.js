export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Search',
        to: '/Search',
        icon: 'cil-magnifying-glass',
        
      },
      
      {
        _name: 'CSidebarNavItem',
        name: 'Ultimas pesquisas',
        to: '/lastsearch',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Profile',
        to: '/Profile',
        icon: 'cil-user'
      },
     
   
    ]
  }
]