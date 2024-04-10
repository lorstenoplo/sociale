# To view a live working demo visit: https://sociale-chi.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To run the project locally

First install the dependencies and run the development server:

```bash
npm install && npm run dev
# or
yarn && yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure:

- /pages - contains all the routes (file based routing)
- /public - images, icons
- /styles - global styling files
- /utils - contains files needed in multiple places, like theme object
- /components - contains common components like navbar
- /components/route_name - contains sections/react components specific to that page
- /data - contains json data needed for 3d globe in /create page

## Documentation of the process followed:

- I bootstraped the project with Nextjs using create-next-app
- For styling i have decided to go with tailwind and chakra ui
- For some ui components I have used acentricity ui
- Chakra ui and tailwind for css
- I decided to go with a glass morph style sticky navbar
- In case the data given by the typecode api wasn't enough I have used the below mentioned api's
- For avatar generation - https://xsgames.co/randomusers/assets/avatars/female/${userId}.jpg
- For generation of random post images - https://picsum.photos/320/300
- For pages like post feed I have used getServersideProps since the data will be subject to constant change
- For  albums page I have used getStaticProps since the data is not frequently changed
- I have also implemented complex frontend libraries i.e, threejs, framer motion, radix for creating animations and rendering 3d models 

# Home screen with navigation options:

![image](https://github.com/lorstenoplo/sociale/assets/69671750/342f0d15-992d-42e4-a527-2f9262cb49bf)

# Feed page with posts of mutliple users:

![image](https://github.com/lorstenoplo/sociale/assets/69671750/3825865e-f21a-422c-9ef9-3a5e986c37b4)

# Ablums Page:

## Hero section:
![image](https://github.com/lorstenoplo/sociale/assets/69671750/8722f9a9-2d91-488a-9a91-89ef6385ab32)

## Main section containing albums of different users:
![image](https://github.com/lorstenoplo/sociale/assets/69671750/6e9e06ef-582e-4ceb-98eb-132a205d9579)

# Single album page:

![image](https://github.com/lorstenoplo/sociale/assets/69671750/5d4c5ef9-d03d-4859-93ee-fdc56d54cfef)


# Create Post page:

Here I have used three js for rendering the globe (similar to the one on github's website)

![image](https://github.com/lorstenoplo/sociale/assets/69671750/4d5de698-3c2b-41fa-bcc1-426107c693ff)

This is the section to add a post using json typecode api:

![image](https://github.com/lorstenoplo/sociale/assets/69671750/51d6e850-ff0d-4d67-87f6-436546a1b184)


