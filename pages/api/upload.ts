import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'; 
import { get } from '@vercel/edge-config';
import type { NextApiResponse, NextApiRequest } from 'next';

interface Blob {
    url: string,
    title: string,
    year: number,
    project: string,
    pathname: string
};
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const body = request.body as HandleUploadBody;
 
  try {
    let title = "";
    let year = "";
    let project = "";
    const SetTitle = (newTitle: string) => {
      title = newTitle;
      console.log("Title set to:", title);
    };

    const SetYear = (newYear: string) => {
      year = newYear;
      console.log("Year set to:", year);
    };

    const SetProject = (newProject: string) => {
      project = newProject;
      console.log("Project set to:", project);
    };

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (
        pathname,
        clientPayload
      ) => {
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.

        SetTitle(clientPayload ? JSON.parse(clientPayload).title : "");
        SetYear(clientPayload ? JSON.parse(clientPayload).year : "");
        SetProject(clientPayload ? JSON.parse(clientPayload).project : "");

        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
          addRandomSuffix: true,
          tokenPayload: JSON.stringify({
            clientPayload,
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow
        try {
          const oldblobs: Blob[] = await get('blobs') as Blob[];
          const name = blob.pathname.split('/').pop()?.split('.')[0].replace(/\s+/g, '') || blob.pathname;
          const info = JSON.parse(tokenPayload ? JSON.parse(tokenPayload).clientPayload : '{}');
          console.log('Info from token payload:', info);
          const body = `
            {
              "items": [
              {
                "operation": "upsert",
                "key": "blobs",
                "value": [
                {
                  "pathname": "${name}",
                  "url": "${blob.url}",
                  "title": "${info.title || ""}",
                  "year": "${info.year || ""}",
                  "project": "${info.project || ""}"
                }${oldblobs.length > 0 ? ',' : ''}
                ${oldblobs.map((b, index) => `
                {
                  "pathname": "${b.pathname}",
                  "url": "${b.url}",
                  "title": "${b.title}",
                  "year": "${b.year}",
                  "project": "${b.project}"
                }${index < oldblobs.length - 1 ? ',' : ''}`).join('')}
                ]
              }
              ]
            }`
          const res = await fetch(`https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items?teamId=${process.env.VERCEL_TEAM_ID}`, {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${process.env.VERCEL_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: body,
          });
          console.log('Body sent to Edge Config:', body);
          console.log('Edge Config response:', await res.json());
        } catch (error) {
          console.error('Error updating Edge Config:', (error as Error).message);
        }
        console.log('blob upload completed', blob);
 
        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
        } catch (error) {
          throw new Error(`Could not upload image to database ${(error as Error).message}`);
        }
      },
    });
    
    console.log('Final blob upload completed', jsonResponse);
    return response.status(200).json(jsonResponse);
  } catch (error) {
    // The webhook will retry 5 times waiting for a 200
    return response.status(400).json({ error: (error as Error).message });
  }
}