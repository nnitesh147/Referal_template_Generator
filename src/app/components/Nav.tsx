import { UserButton, useUser } from "@clerk/nextjs";

const Nav = () => {
  const { user } = useUser();

  return (
    <div className="flex mx-1 my-1 justify-between bg-gray-50">
      <div>
        <span>Welcome {user?.firstName}</span>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Nav;
