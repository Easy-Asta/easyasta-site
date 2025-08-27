"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplication } from '@/components/ApplicationContext';

/**
 * Step 6 – Uploads
 *
 * Allows the applicant to upload required documents such as a scan of
 * their passport. Files are uploaded directly to Vercel Blob via our
 * upload API route. After a successful upload, we store the returned
 * URL in the application context.
 */
export default function Step6Uploads() {
  const router = useRouter();
  const { data, update } = useApplication();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      // Upload raw file directly; our API route expects the body to be the file blob
      const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      });
      const dataRes = await res.json();
      if (!res.ok) throw new Error(dataRes.error || 'Upload failed');
      update({ uploads: { passportImageUrl: dataRes.url } });
      router.push('/apply/step7-review');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Uploads</h1>
      <p>Please upload a scan or photo of your passport information page.</p>
      {error && <p className="text-red-600">{error}</p>}
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <div>
        <button
          disabled={!file || uploading}
          onClick={handleUpload}
          className="px-4 py-2 rounded-md bg-blue-600 text-white"
        >
          {uploading ? 'Uploading…' : 'Upload & Continue'}
        </button>
      </div>
    </div>
  );
}