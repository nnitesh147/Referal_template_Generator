import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-evenly items-center h-screen w-screen">
      <div className="my-auto">
        <SignIn
          path="/sign-in"
          forceRedirectUrl={"/"}
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
              card: "shadow-none border-black",
            },
          }}
        />
      </div>
    </div>
  );
}
