import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";

export const Route = createFileRoute("/settings")({
  component: Settings,
});

function Settings() {
  return (
    <>
      <h1 className="font-semibold text-lg md:text-xl">Settings</h1>

      <div className="space-y-6">
        <div className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Update your account information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value="shadcn" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value="user@example.com" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Configure your notification settings.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">New messages</div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">New followers</div>
                  <Switch />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">Friend requests</div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>Privacy</CardTitle>
              <CardDescription>Manage your privacy settings.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">Show my profile</div>
                  <Select>
                    <SelectTrigger className="w-24">
                      <SelectValue className="text-sm rounded-lg font-semibold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">To everyone</SelectItem>
                      <SelectItem value="followers">
                        Only to followers
                      </SelectItem>
                      <SelectItem value="none">To no one</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">Show my posts</div>
                  <Select>
                    <SelectTrigger className="w-24">
                      <SelectValue className="text-sm rounded-lg font-semibold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">To everyone</SelectItem>
                      <SelectItem value="followers">
                        Only to followers
                      </SelectItem>
                      <SelectItem value="none">To no one</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Button>Discard</Button>
      <Button>Save</Button>
    </>
  );
}
