import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import useAuthStore from "../../store/authStore";
import useAuth from "../../hooks/useAuth.js";
import Loading from "./Loading.jsx";

const ButtonDropdown = () => {
  const { user,loading } = useAuthStore();
  const { handleLogout } = useAuth();
  return (
    
    <DropdownMenu.Root>
      {/* Button */}
      <DropdownMenu.Trigger disabled={loading} className="px-4 py-2 bg-blue-600 bg-gradient-to-br text-white rounded-lg cursor-pointer">
        {user.name + "▾"}
      </DropdownMenu.Trigger>

      {/* Content */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          
          className="bg-b  shadow-lg rounded-lg p-2 w-38 mt-3 mr-2"
          sideOffset={5}
        >
          <DropdownMenu.Item
            onClick={handleLogout}
            disabled={loading}
            className="px-3 py-2 hover:bg-red-600 hover:text-white cursor-pointer rounded"
          >
            LogOut
          </DropdownMenu.Item>

          {/*<DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />

          <DropdownMenu.Item className="px-3 py-2 hover:bg-red-100 text-red-600 cursor-pointer rounded">
            Logout
          </DropdownMenu.Item> */}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default ButtonDropdown;
