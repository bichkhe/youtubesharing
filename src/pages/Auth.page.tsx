import { useToggle, upperFirst, useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  Title,
  ThemeIcon,
  Loader,
  Box,
  LoadingOverlay,
} from "@mantine/core";
import { GoogleButton } from "../components/social/GoogleButton";
import { TwitterButton } from "../components/social/XButton";
import { login, register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { IconBrandYoutubeFilled, IconCheck, IconX } from "@tabler/icons-react";
import { LoginResponse, RegisterResponse } from "../api/auth/types";
import { ResponseError, isResponseError } from "../api/global/api";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
interface AuthPageProps {
  mode?: string;
}
export function AuthPage(props: AuthPageProps) {
  const location = useLocation();
  let modeAuth = "login";
  if (location.state) {
    const { mode } = location.state;
    modeAuth = mode;
  }

  let navigate = useNavigate();
  const [type, toggle] = useToggle(["login", "register"]);
  const [visible, loader] = useDisclosure(false);
  useEffect(() => {
    toggle(modeAuth);
  }, [modeAuth]);

  const form = useForm({
    initialValues: {
      email: "mr.bichkhe@gmail.com",
      name: "Tuan Phung",
      password: "123456789@#!",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email1x2"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleAuth = async () => {
    loader.open();
    setTimeout(function () {
      if (type == "login") {
        handleLogin();
      } else {
        handleRegister();
      }
      loader.close();
    }, 1000);
  };
  const handleLogin = async () => {
    form.validate();

    const req = {
      email: form.values.email,
      password: form.values.password,
    };
    const res = (await login(req)) as LoginResponse | ResponseError;
    if (!isResponseError(res)) {
      notifications.show({
        color: "green",
        title: "Login Successfully",
        message: "",
        autoClose: true,
        icon: <IconCheck />,
      });
      localStorage.setItem("youtubesharing.auth_token", res.sessionToken);
      navigate("/");
    } else {
      notifications.show({
        color: "red",
        title: "Login Failed",
        message: res.error_message,
        autoClose: true,
        icon: <IconX />,
      });
    }
  };
  const handleRegister = async () => {
    console.log("handleRegister:", form.values);
    const req = {
      name: form.values.name,
      email: form.values.email,
      password: form.values.password,
    };
    const res = (await register(req)) as RegisterResponse | ResponseError;
    if (!isResponseError(res)) {
      notifications.show({
        color: "green",
        title: "Register Successfully",
        message: "",
        autoClose: true,
        icon: <IconCheck />,
      });
      navigate("/auth", { state: "login" });
    } else {
      notifications.show({
        color: "red",
        title: "Register Failed",
        message: res.error_message,
        autoClose: true,
        icon: <IconX />,
      });
    }
  };
  const handleOAuth = () => {
    notifications.show({
      color: "green",
      title: "This feature is coming soon. Please wait",
      message: "",
      autoClose: true,
      icon: <IconCheck />,
    });
  };

  return (
    <>
      <Container maw="30rem" mt={"5rem"}>
        <Group justify="center">
          <Link to={"/"}>
            <ThemeIcon size="xl">
              <IconBrandYoutubeFilled style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
          </Link>
          Youtube Sharing
        </Group>
        <Box pos="relative">
          <LoadingOverlay
            visible={visible}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <Paper withBorder shadow="md" p={30} mt={30} radius="xs">
            <Text size="lg" fw={700}>
              Welcome to Youtube Sharing, {type} with
            </Text>
            <Group grow mb="md" mt="md">
              <GoogleButton radius="xl" onClick={handleOAuth}>
                Google
              </GoogleButton>
              <TwitterButton radius="xl">Twitter</TwitterButton>
            </Group>

            <Divider
              label="Or continue with email"
              labelPosition="center"
              my="lg"
            />
            <form
              onSubmit={form.onSubmit(() => {
                handleAuth();
              })}
            >
              <Stack>
                {type === "register" && (
                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    value={form.values.name}
                    onChange={(event) =>
                      form.setFieldValue("name", event.currentTarget.value)
                    }
                    radius="md"
                    data-testid="name-field-testid"
                  />
                )}

                <TextInput
                  required
                  label="Email"
                  placeholder="bichkhe@youtubesharing.vn"
                  value={form.values.email}
                  onChange={(event) =>
                    form.setFieldValue("email", event.currentTarget.value)
                  }
                  error={form.errors.email && "Invalid email"}
                  radius="md"
                  data-testid="email-field-testid"
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  value={form.values.password}
                  onChange={(event) =>
                    form.setFieldValue("password", event.currentTarget.value)
                  }
                  error={
                    form.errors.password && [
                      "Password should include at least 6 characters",
                    ]
                  }
                  radius="md"
                  data-testid="password-field-testid"
                />

                {type === "register" && (
                  <Checkbox
                    label="I accept terms and conditions"
                    checked={form.values.terms}
                    onChange={(event) =>
                      form.setFieldValue("terms", event.currentTarget.checked)
                    }
                    data-testid="term-field-testid"
                  />
                )}
              </Stack>

              <Group justify="space-between" mt="xl">
                <Anchor
                  component="button"
                  type="button"
                  c="dimmed"
                  onClick={() => toggle()}
                  size="xs"
                  data-testid="change-mode-testid"
                >
                  {type === "register"
                    ? "Already have an account? Login"
                    : "Don't have an account? Register"}
                </Anchor>
                <Button
                  type="submit"
                  radius="xl"
                  data-testid="submit-btn-testid"
                >
                  {upperFirst(type)}
                </Button>
              </Group>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
