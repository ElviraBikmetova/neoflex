import { ENavItems } from "../enums/navigation";
import { ERoutes } from "../enums/routes";

export const navItems = [
    {
        itemName: ENavItems.Favorites,
        path: ERoutes.Empty
    },
    {
        itemName: ENavItems.Cart,
        path: ERoutes.Cart
    },
    {
        itemName: ENavItems.Contacts,
        path: ERoutes.Empty
    },
    {
        itemName: ENavItems.ConditionsOfService,
        path: ERoutes.Empty
    }
]