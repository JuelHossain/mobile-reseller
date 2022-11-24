import { Button, Group } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";
import { useEffect } from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthContext } from "../../../context/authContext/authContext";
import auth from "../../../firebase";
import useToken from "../../../hooks/auth/useToken";
import GoogleIcon from "./icons/GoogleIcon";

export function GoogleButton({ ...props }) {
  return <Button className="flex-1 " leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

export function GithubButton({ ...props }) {
  return (
    <Button
      className="flex-1  "
      {...props}
      leftIcon={<IconBrandGithub size={16} />}
      sx={(theme) => ({
        backgroundColor: theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        color: "#fff",
        "&:hover": {
          backgroundColor: theme.colors.dark[theme.colorScheme === "dark" ? 9 : 6],
        },
      })}
    />
  );
}

export function SocialButtons() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  const { setError } = useAuthContext();

  const user = googleUser || githubUser;
  const error = googleError || githubError;

  const { mutate: generateToken } = useToken();

  useEffect(() => {
    if (error) {
      setError(error.message);
    }
    if (user) {
      generateToken(user);
    }
  }, [user, error, setError, generateToken]);

  return (
    <Group mb="md" mt="md">
      <GoogleButton loading={googleLoading} onClick={() => signInWithGoogle()}>
        Continue with Google
      </GoogleButton>
      <GithubButton loading={githubLoading} onClick={() => signInWithGithub()}>
        Login with GitHub
      </GithubButton>
    </Group>
  );
}
