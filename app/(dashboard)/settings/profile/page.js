import AuthInput from "@/components/form/auth-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
  return (
    <>
      <div className="pb-5 mb-5 border-b-1 border-zinc-900">
        <h1 className="text-xl font-medium">Profile</h1>
        <p className="text-sm text-gray-400">
          This is how others will see you on the site.
        </p>
      </div>
      <div className="mb-5 grid w-full gap-1.5">
        <AuthInput
          name="text"
          label="Username"
          placeholder="Amar Muric"
          className="border-zinc-900"
        />
        <p className="text-sm text-muted-foreground">
          This is your public display name. It can be your real name or a
          pseudonym. You can only change this once every 30 days.
        </p>
      </div>
      <div className="mb-5 grid w-full gap-1.5">
        <AuthInput
          className="border-zinc-900"
          name="text"
          label="Email"
          placeholder="Select a verified email to display"
        />
        <p className="text-sm text-muted-foreground">
          You can manage verified email addresses in your email settings.
        </p>
      </div>

      <div className="grid w-full gap-1.5 mb-5">
        <Label htmlFor="message-2">Bio</Label>
        <Textarea
          className="border-zinc-900 max-h-40"
          placeholder="Your bio..."
          id="message-2"
        />
        <p className="text-sm text-muted-foreground">
          You can @mention other users and organizations to link to them.
        </p>
      </div>

      <Button className="bg-[#ee6711] hover:bg-[#ee671180] transition-all rounded-md hover:rounded-[2rem] self-end">
        Save to Vault
      </Button>
    </>
  );
}
