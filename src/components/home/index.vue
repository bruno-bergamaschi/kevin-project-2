<template>
  <v-container>
    <v-row no-gutters class="line" v-if="showList">
      <v-col cols="6" class="line__column--red">{{ name }}</v-col>
    </v-row>

    <CustomRow @change-name="changeName" />

    <CustomRow>
      <template v-slot:action>
        <v-btn color="primary">Salvar</v-btn>
      </template>
    </CustomRow>
  </v-container>
</template>

<script type="text/javascript" src="./script.js" />

<style scoped lang="scss" src="./style.scss" />
