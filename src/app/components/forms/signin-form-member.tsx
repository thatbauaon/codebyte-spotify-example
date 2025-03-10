"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button, Checkbox, Form, Input, message } from 'antd';
import type { FormProps } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export function SigninFormMember() {
  const router = useRouter();

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    console.log('Success:', values);

    // ส่งข้อมูลไปที่ API route
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),  // ส่งข้อมูล username และ password
      });

      const data = await response.json();

      if (response.ok) {
        // หาก login สำเร็จ
        message.success('Login successful!');
        // เก็บ token หรือทำการ redirect ตามที่ต้องการ
        localStorage.setItem("token", data.token);
        router.push("/member");  // หรือหน้าอื่นๆ ตามต้องการ
      } else {
        // หาก login ไม่สำเร็จ
        console.error('========error====1===')
        message.error(data.error || 'Login failed!');
      }
    } catch (error) {
      console.error('========error====2===')
      console.error('Error occurred during login:', error);
      message.error('An error occurred while trying to log in.');
    }
  };
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout='vertical'
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
