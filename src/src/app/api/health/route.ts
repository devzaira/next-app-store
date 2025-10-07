import { NextRequest, NextResponse } from 'next/server';

type HealthResponse = {
  status: string;
  timestamp: string;
  uptime: number;
  service: string;
};

export async function GET(request: NextRequest) {
  const response: HealthResponse = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'Albertsons Enterprise App Store'
  };

  return NextResponse.json(response, { status: 200 });
}

// Explicitly handle other methods
export async function POST() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}

export async function PUT() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}

export async function DELETE() {
  return new NextResponse('Method Not Allowed', { status: 405 });
}