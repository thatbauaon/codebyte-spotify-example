"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button, Checkbox, Form, Input, message } from "antd";
import type { FormProps } from "antd";
import { login } from "@/app/data/actions/auth-actions";

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

export function SigninFormMember() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setErrorMessage(""); // ล้าง error message

    startTransition(async () => {
      const result = await login({
        email: values.username as string,
        password: values.password as string,
        role: "MEMBER",
        firebase: "ss",
      });
      
      // ถ้าไม่มี error ให้ redirect ด้วย client side
      if (!result?.error) {
        router.push("/members");
      } else {
        setErrorMessage(result.error);
        message.error(result.error);
      }
    });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Enter your username" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending}>
          {isPending ? "Logging in..." : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
}
