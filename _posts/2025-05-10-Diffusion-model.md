---
layout: post
title: "Diffusion Models"
date: 2025-05-10
description:
tags: ai
categories: lm
---

### Common usage of AWS (and how to understand their costs!)

#### Identity and Access Management

IAM (Identity and Access Management) is a service in AWS that enables you to securely control access to AWS services and resources. It lets you create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

- Users: An IAM user is an entity that you create in AWS to represent a person or application that needs to interact with your AWS resources.

  - Each IAM user has a unique name within your AWS account.
  - IAM users can be grouped to manage permissions more efficiently.
  - It's a best practice to enable multi-factor authentication (MFA) for enhanced security.
  - It's generally recommended to avoid using the root user for day-to-day tasks and instead create IAM users with specific permissions.

- Policies is a JSON document that defines the permissions for an IAM user, group, or role. It specifies what actions are allowed or denied on which AWS resources, and under what conditions.

* **Characteristics:**
  - Policies follow a specific structure with elements like `Version`, `Statement`, `Effect` (Allow or Deny), `Action`, `Resource`, and `Condition` (optional).
  - AWS supports different types of policies, including:
    - **Identity-based policies:** Attached to IAM users, groups, or roles to grant permissions to the identity. These can be AWS-managed (predefined by AWS) or customer-managed (created and managed by you). Inline policies are directly embedded in a single IAM user, group, or role.
    - **Resource-based policies:** Attached directly to AWS resources (like S3 buckets or IAM roles) to control which principals can access that resource and what actions they can perform.
    - **Permissions boundaries:** Attached to IAM users and roles to set the maximum permissions that the identity-based policies can grant.
    - **Service Control Policies (SCPs):** Used in AWS Organizations to define the maximum permissions for all accounts within an organization.
  - Policies enable you to implement the principle of least privilege by granting only the necessary permissions to perform a task.
* **Use Cases:**
  - Defining what actions a user can perform on specific S3 buckets (e.g., `s3:GetObject` on `arn:aws:s3:::my-bucket/*`).
  - Granting a group of developers permission to manage EC2 instances in a specific region.
  - Restricting access to sensitive AWS services for certain users.

### IAM Roles

- **Definition:** An IAM role is an IAM identity that you can create in your account with specific permissions. It's similar to an IAM user, but it's not uniquely associated with one person. Instead, it's intended to be _assumed_ by anyone who needs it.
- **Characteristics:**
  - IAM roles do not have standard long-term credentials like passwords or access keys. Instead, temporary security credentials are created when a role is assumed.
  - Roles define a set of permissions that are granted to whoever assumes the role.
  - A _trust policy_ is attached to a role, defining which principals (users, AWS services, or accounts) are allowed to assume the role.
  - An _identity-based policy_ (or policies) is also attached to the role, defining what the assumed role can do.
- **Use Cases:**
  - **Delegating access to AWS resources:** Allowing IAM users in your account or another AWS account to access resources they don't normally have access to, without sharing long-term credentials.
  - **Granting permissions to AWS services:** Enabling AWS services like EC2, Lambda, and ECS to perform actions on your behalf. For example, an EC2 instance can assume a role to access an S3 bucket.
  - **Federating identities:** Allowing users authenticated outside of AWS (e.g., via corporate directory or a web identity provider) to access AWS resources by assuming a role.
  - **Providing secure access for applications:** Applications running on AWS compute resources can assume roles to get temporary credentials, eliminating the need to embed or manage long-term secrets within the application.

In summary:

- **Users** are identities for people or applications that need to interact with AWS. They have long-term credentials.
- **Policies** define permissions and are attached to users, groups, or roles.
- **Roles** are identities that are assumed by users, applications, or services and provide temporary security credentials and a defined set of permissions. They are a secure way to grant permissions without managing or sharing long-term credentials.

Using IAM effectively, with a focus on roles and the principle of least privilege, is crucial for maintaining a secure AWS environment.

- Permission
- Role
- Policy
-

#### Tagging

#### EC2 Instances

#### CloudWatch

#### Networking

- VPC
- Subnets

#### Ingress

#### Load Balancing

- Application load balancer
- Network load balancer

#### Elastic Kubernetes Services

#### CloudFormation

#### Data Storage

##### S3 buckets

##### Databases

- Elasticache
- RDS MySQL

#### How to use secrets!
