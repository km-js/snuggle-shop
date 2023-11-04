import React from 'react'
import { List, ListItem, Logo, NavbarContainer, Link } from './Header.style'

function Header() {
    const pages = ["Home", "Categories", "Products"]
    return (
        <NavbarContainer>
            <Logo>SnuggleShop</Logo>

            <List>
                {pages.map(page => (
                    <ListItem>
                        <Link href={`#${page}`}>
                            {page}
                        </Link>

                    </ListItem>
                )
                )}

            </List>

        </NavbarContainer>

    )
}

export default Header