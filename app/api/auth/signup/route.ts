import { NextResponse } from 'next/server';

type AuthPayload = {
  idType?: string;
  masterId?: string;
  password?: string;
  role?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as AuthPayload;
  const { idType, masterId, password, role } = body;

  if (!idType || !masterId || !password || !role) {
    return NextResponse.json(
      { error: 'All fields are required for sign-up.' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: `Sign-up completed for ${masterId}.`,
      user: {
        idType,
        masterId,
        role
      }
    },
    { status: 201 }
  );
}
