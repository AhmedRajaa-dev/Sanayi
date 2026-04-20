import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const ButtonDropdown = () => {
  return (
    <DropdownMenu.Root>
      {/* Button */}
      <DropdownMenu.Trigger className="px-4 py-2 bg-blue-600 bg-gradient-to-br text-white rounded-lg cursor-pointer">
        Open Menu ▾
      </DropdownMenu.Trigger>

      {/* Content */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-b  shadow-lg rounded-lg p-2 w-38 mt-3 mr-2"
          sideOffset={5}
        >
          {/* <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded">
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
