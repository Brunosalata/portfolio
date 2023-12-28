<template>
    <div>
        <!-- Sessão da tabela -->
        <v-card class="border mb-4">
            <div class="d-flex justify-space-between">
            <v-card-title>Relação da frota</v-card-title>
            
            <v-card-title>
                <v-btn @click="isDialogOpen = true" variant="tonal" size="small">Adicionar Caminhão</v-btn>
                <v-dialog 
                v-model="isDialogOpen"
                width="600px"
                >
                
                <v-card>
                    <v-card-title class="pt-3">Adicionar Caminhão</v-card-title>
                    <v-card-text>
                    <v-row>
                        <v-col>
                        <v-text-field clearable label="Caminhão" variant="outlined"></v-text-field>
                        </v-col>

                        <v-col>
                        <v-text-field clearable label="Código" variant="outlined"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                        <v-select label="Operário" variant="outlined"
                            :items="['Beltrano', 'Ciclano', 'Bino', 'Fulano', 'Pedro', 'Pereirão']"></v-select>
                        </v-col>

                        <v-col>
                        <v-text-field 
                            clearable 
                            label="Contato" 
                            variant="outlined"
                            :rules="contactRules"></v-text-field>
                        </v-col>
                    </v-row>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="isDialogOpen = false" variant="text">Cancelar</v-btn>
                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                
            </v-card-title>
            </div>
            
            <v-table density="compact">
            <thead>
                <tr>
                <th>Caminhão</th>
                <th>Código</th>
                <th>Operário</th>
                <th>Contato</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                <td>Mercedes Azul</td>
                <td>ABC001</td>
                <td>
                    <v-chip variant="outlined" color="primary" size="small">Fulano</v-chip>
                </td>
                <td>(xx) 9 9999-9999</td>
                <td>
                                <v-dialog width="600px">
                                    <template #activator="{ props }">
                                    <v-btn v-bind="props" variant="tonal" color="primary">Editar</v-btn>
                                    </template>
                                <v-card>
                                <v-card-text>
                                    

                                    
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn variant="text">Cancelar</v-btn>
                                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                                </v-card-actions>
                                </v-card>
                            </v-dialog>
                </td>
                </tr>

                <tr>
                <td>Mercedes Vermelha</td>
                <td>ABC042</td>
                <td>
                    <v-chip variant="outlined" size="small" color="secondary">Beltrano</v-chip>
                </td>
                <td>(xx) 9 8888-8888</td>
                <td>
                                <v-dialog width="600px">
                                    <template #activator="{ props }">
                                    <v-btn v-bind="props" variant="tonal" color="primary">Editar</v-btn>
                                    </template>
                                <v-card>
                                <v-card-text>

                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn variant="text">Cancelar</v-btn>
                                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                                </v-card-actions>
                                </v-card>
                            </v-dialog>
                </td>
                </tr>

                <tr>
                <td>Mercedes Verde</td>
                <td>ABC008</td>
                <td>
                    <v-chip variant="outlined" color="success" size="small">Ciclano</v-chip>
                </td>
                <td>(xx) 9 7777-7777</td>
                <td>
                    <v-dialog width="600px">
                        <template #activator="{ props }">
                        <v-btn v-bind="props" variant="tonal" color="primary">Editar</v-btn>
                        </template>
                        <v-card>
                        <v-card-text>
                        
                        </v-card-text>
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn variant="text">Cancelar</v-btn>
                            <v-btn variant="tonal" color="success">Salvar</v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-dialog>
                </td>
                </tr>
                
            </tbody>
            </v-table>
        </v-card>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const isDialogOpen = ref(false)
  const contactRules = [
    (value:any) => {
      if (value) {
        return true;
      }
      return 'O contato é obrigatório';
    },
    (value:any) => {
      if (value.includes('-') && value.includes('(') && value.includes(')')) {
        return true;
      }
      return 'O número é inválido';
    }
  ];
</script>