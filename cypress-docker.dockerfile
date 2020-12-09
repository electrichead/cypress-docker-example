FROM cypress/included:6.1.0

COPY ./cypress-package.json ./package.json
COPY ./tsconfig.base.json ./tsconfig.base.json
RUN npm i
